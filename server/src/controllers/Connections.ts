import { Request, Response } from "express";

import db from "../database/connection";

export default class Connections {
    async create(request: Request, response: Response) {
        try {
            const { user_id } = request.body;

            if (!user_id) {
                return response.status(400).json({ message: "Requisição com dados incompletos" });
            }

            await db("connections").insert({ user_id });

            return response.status(201).json({ message: "Conexão adicionada com sucesso!" });
        } catch (error) {
            return response.status(400).json({ message: "Erro ao adicionar conexão!", error });
        }
    }

    async index(request: Request, response: Response) {
        try {
            const totalConnections = await db("connections").count("* as total");

            const { total } = totalConnections[0];

            return response.json({ message: "Número de conexões obtido", total });
        } catch (error) {
            return response.status(400).json({ message: "Houve um erro ao obter número de conexões", error });
        }

    }
}