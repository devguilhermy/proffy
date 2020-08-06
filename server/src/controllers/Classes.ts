import db from "../database/connection";
import convertTimeToMinutes from "../utils/convertTimeToMinutes";

import {Request, Response} from "express";

interface scheduleItem {
    week_day: number,
    from: string,
    to: string
}

export default class ClassesController {
    async index(request: Request, response: Response) {
        const {subject, week_day, time} = request.query;

        if (!subject || !week_day || !time) {
            return response.status(400).json({message: "Requisição de listagem faltando filtros!"});
        }

        const timeInMinutes = convertTimeToMinutes(time as string);

        const classes = await db("classes")
        .where("classes.subject", "=", subject as string)
        .where("class_schedules.week_day", "=", Number(week_day))
        .where("class_schedules.from", "<=", timeInMinutes)
        .where("class_schedules.to", ">", timeInMinutes)
        .join("users", "classes.user_id", "=", "users.id")
        .join("class_schedules", "class_schedules.class_id", "=", "classes.id")
        .select(["users.*", "classes.*", "class_schedules.*"]);

        // const classes = await db("classes")
        // .whereExists(function () {
        //     this.select("class_schedules.*")
        //     .from("class_schedules")
        //     .whereRaw("`class_schedules`.`class_id` = `classes`.`id`")
        //     .whereRaw("`class_schedules`.`week_day` = ??", [Number(week_day)])
        //     .whereRaw("`class_schedules`.`from` <= ??", timeInMinutes)
        //     .whereRaw("`class_schedules`.`to` > ??", timeInMinutes)
        // })
        // .join("users", "classes.user_id", "=", "users.id")
        // .select(["users.*", "classes.*"]);

        return response.json({message: "Lista de aulas adquirida", classes})
    }

    async create(request: Request, response: Response) {
        const { name, bio, whatsapp, avatar, subject, description, price, schedule } = request.body;

        const transaction = await db.transaction();

        try {
            const insertedUserIds = await transaction("users").insert({
                name,
                bio,
                whatsapp,
                avatar
            });

            const user_id = insertedUserIds[0];

            const insertedClassIds = await transaction("classes").insert({
                subject,
                description,
                price,
                user_id
            });

            const class_id = insertedClassIds[0];

            const classSchedule = schedule.map((scheduleItem: scheduleItem) => {
                const { week_day, from, to } = scheduleItem;

                return {
                    week_day,
                    from: convertTimeToMinutes(from),
                    to: convertTimeToMinutes(to),
                    class_id
                }
            });

            await transaction("class_schedules").insert(classSchedule);

            await transaction.commit();

            return response.status(201).json({ message: "Cadastro feito com sucesso!" });
        } catch (error) {
            await transaction.rollback();

            return response.status(400).json({ message: "Houve um erro no cadastro!", error })
        }

    }
}