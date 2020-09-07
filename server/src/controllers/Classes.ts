import db from "../database/connection";
import convertTimeToMinutes from "../utils/convertTimeToMinutes";

import knex_populate from "knex-populate";

import { Request, Response, json } from "express";

interface scheduleItem {
    week_day: number;
    from: string;
    to: string;
}

export default class ClassesController {
    async show(request: Request, response: Response) {
        const classes = await knex_populate(db, "classes")
            .find()
            .populate("teachers", "teacher_id", "teacher")
            .populate("class_schedules", "class_id")
            // .find({ week_day })
            .exec();

        return response.json({
            message: "Lista de aulas adquirida",
            classes,
        });
    }
    async find(request: Request, response: Response) {
        console.log(request);

        // console.log("a");
        if (!request.query.ids) {
            return response.status(400).json({
                message: "Ocorreu um erro!",
                error: "Não foi fornecido um vetor de ids",
            });
        }

        const idsArray: any = request.query.ids;

        // console.log(idsArray);

        let classes = [];

        for (let index = 0; index < idsArray.length; index++) {
            if (
                await knex_populate(db, "classes").find({
                    id: idsArray[index],
                })
            ) {
                const classItem = await knex_populate(db, "classes")
                    .find({ teacher_id: idsArray[index] })
                    .populate("teachers", "teacher_id", "teacher")
                    .populate("class_schedules", "class_id")
                    .exec();

                classes.push(...classItem);
            }
        }

        return response.json({
            message: "Lista de aulas filtradas por ID adquirida",
            classes,
        });
    }
    async filter(request: Request, response: Response) {
        console.log(request.query);
        const { subject, week_day, time } = request.query;

        if (!subject || !week_day || !time) {
            return response.status(400).json({
                message: "Requisição de listagem faltando filtros!",
            });
        }

        const timeInMinutes = convertTimeToMinutes(time as string);

        const classes = await knex_populate(db, "classes")
            .find({ subject })
            .populate("teachers", "teacher_id", "teacher")
            .populate("class_schedules", "class_id")
            // .find({ week_day })
            .exec();

        // const classes = await db("classes")
        //     .where("classes.subject", "=", subject as string)
        //     .where("class_schedules.week_day", "=", Number(week_day))
        //     .where("class_schedules.from", "<=", timeInMinutes)
        //     .where("class_schedules.to", ">", timeInMinutes)
        //     .join(
        //         "teachers",
        //         "classes.teacher_id",
        //         "=",
        //         "teachers.id"
        //     )
        //     .join(
        //         "class_schedules",
        //         "class_schedules.class_id",
        //         "=",
        //         "classes.id"
        //     )
        //     .select(["teachers.*", "classes.*", "class_schedules.*"]);

        // const classes = await db("classes")
        //     .whereExists(function() {
        //         this.select("class_schedules.*")
        //             .from("class_schedules")
        //             .whereRaw(
        //                 "`class_schedules`.`class_id` = `classes`.`id`"
        //             )
        //             .whereRaw("`class_schedules`.`week_day` = ??", [
        //                 Number(week_day),
        //             ])
        //             .whereRaw(
        //                 "`class_schedules`.`from` <= ??",
        //                 timeInMinutes
        //             )
        //             .whereRaw(
        //                 "`class_schedules`.`to` > ??",
        //                 timeInMinutes
        //             );
        //     })
        //     .join(
        //         "teachers",
        //         "classes.teacher_id",
        //         "=",
        //         "teachers.id"
        // 	)
        // 	.join(
        //         "class_schedules",
        //         "classes.id",
        //         "=",
        //         "class_schedules.id"
        //     )
        //     .select(["teachers.*", "classes.*", "class_schedules.*"]);
        console.log(classes);
        return response.json({
            message: "Lista filtrada de aulas adquirida",
            classes,
        });
    }

    async create(request: Request, response: Response) {
        const {
            name,
            bio,
            whatsapp,
            avatar,
            subject,
            description,
            price,
            schedule,
        } = request.body;

        const transaction = await db.transaction();

        try {
            const insertedTeacherIds = await transaction(
                "teachers"
            ).insert({
                name,
                bio,
                whatsapp,
                avatar,
            });

            const teacher_id = insertedTeacherIds[0];

            const insertedClassIds = await transaction(
                "classes"
            ).insert({
                subject,
                description,
                price,
                teacher_id,
            });

            const class_id = insertedClassIds[0];

            const classSchedule = schedule.map(
                (scheduleItem: scheduleItem) => {
                    const { week_day, from, to } = scheduleItem;

                    return {
                        week_day,
                        from: convertTimeToMinutes(from),
                        to: convertTimeToMinutes(to),
                        class_id,
                    };
                }
            );

            await transaction("class_schedules").insert(
                classSchedule
            );

            await transaction.commit();

            return response
                .status(201)
                .json({ message: "Cadastro feito com sucesso!" });
        } catch (error) {
            await transaction.rollback();

            return response.status(400).json({
                message: "Houve um erro no cadastro!",
                error,
            });
        }
    }
}
