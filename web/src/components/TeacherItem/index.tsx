import React from "react";

import "./styles.css";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import api from "../../services/api";

export interface Teacher {
    teacher_id: number;
    id: number;
    name: string;
    bio: string;
    whatsapp: string;
    avatar: string;
    subject: string;
    description: string;
    price: number;
    week_day: number;
    from: number;
    to: number;
}
interface ClassItemProps {
    teacher: Teacher;
}

function ClassItem({ teacher }: ClassItemProps) {
    const {
        name,
        bio,
        whatsapp,
        avatar,
        subject,
        price,
        week_day,
        from,
        to,
    } = teacher;

    function addConnection() {
        api.post("/connections", { teacher_id: teacher.teacher_id });
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={avatar} alt="Avatar do proffy" />
                <div>
                    <strong>{name}</strong>
                    <span>{subject}</span>
                </div>
            </header>
            <p>{bio}</p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ {price},00</strong>
                </p>
                <a
                    target="_blank"
                    onClick={addConnection}
                    href={`https://wa.me/${whatsapp}`}
                >
                    <img src={whatsappIcon} alt="Ícone do Whatsapp" />
                    Entrar em contato
                </a>
            </footer>
        </article>
    );
}

export default ClassItem;
