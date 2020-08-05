import React from "react";
import Header from "../../components/Header";

import "./styles.css"
import TeacherItem from "../../components/TeacherItem";

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <Header title="Proffys disponíveis na plataforma">
                <form id="filter-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="week-day">Dia da semana</label>
                        <input type="text" id="week-day" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Horário</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </Header>
            <main className="teachers-list">
                <TeacherItem></TeacherItem>
                <TeacherItem></TeacherItem>
                <TeacherItem></TeacherItem>
                <TeacherItem></TeacherItem>
            </main>
        </div>
    );
}

export default TeacherList;