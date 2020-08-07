import React, { FormEvent, useState } from "react";

import api from "../../services/api";

import "./styles.css"

import Header from "../../components/Header";
import TeacherItem, {Teacher} from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

import searchIcon from "../../assets/images/icons/search.svg";


function TeacherList() {
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState("");
    const [week_day, setWeekDay] = useState("");
    const [time, setTime] = useState("");

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        // try {
            const response = await api.get("classes", {
                params: {
                    subject,
                    week_day,
                    time
                }
            });

            setTeachers(response.data.classes);
        // } catch (error) {
            // alert(error)
        // }

    }

    return (
        <div id="page-teacher-list" className="container">
            <Header title="Proffys disponíveis na plataforma">
                <form id="filter-teachers" onSubmit={handleSubmit}>
                    <Input
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={event => {
                            setSubject(event.target.value)
                        }}
                    />
                    <Select
                        name="week_day"
                        label="Dia da semana"
                        options={[
                            { value: "1", label: "Segunda-feira" },
                            { value: "2", label: "Terça-feira" },
                            { value: "3", label: "Quarta-feira" },
                            { value: "4", label: "Quinta-feira" },
                            { value: "5", label: "Sexta-feira" },
                            { value: "6", label: "Sábado" },
                            { value: "7", label: "Domingo" }
                        ]}
                        value={week_day}
                        onChange={event => {
                            setWeekDay(event.target.value)
                        }}
                    />
                    <Input
                        type="time"
                        name="time"
                        label="Horário"
                        value={time}
                        onChange={event => {
                            setTime(event.target.value)
                        }}
                    />
                    <button type="submit">
                        <img src={searchIcon} alt="Ícone de busca" />
                    </button>
                </form>
            </Header>
            
            <main className="teachers-list">
                {
                    teachers.map((teacher: Teacher) => {
                        return (
                            <TeacherItem
                                key={teacher.id}
                                teacher={teacher}
                            />
                        )
                    })
                }
            </main>
        </div>
    );
}

export default TeacherList;