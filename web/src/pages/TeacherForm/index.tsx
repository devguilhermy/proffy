import React, { useState, FormEvent } from "react";
import { useHistory } from "react-router-dom";

import Header from "../../components/Header";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Select from "../../components/Select";

import "./styles.css"

import warningIcon from "../../assets/images/icons/warning.svg"
import api from "../../services/api";

function TeacherForm() {
    const history = useHistory();

    const [schedule, setSchedule] = useState([
        { week_day: 0, from: "", to: "" }
    ]);
    
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [avatar, setAvatar] = useState("");

    const [subject, setSubject] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    function addNewScheduleItem() {
        setSchedule([
            ...schedule,
            { week_day: 0, from: "", to: "" }
        ]);
    }

    function handleFormSubmit(event: FormEvent) {
        event.preventDefault();

        const classObject = {
            name,
            bio,
            whatsapp,
            avatar,
            subject,
            description,
            price,
            schedule
        }

        api.post("/classes", classObject)
        .then(response => {
            alert(response.data.message)
        }).catch(error=>{
            alert(error);
        })

        history.push("/");
    }

    function setScheduleItem(elementPosition: number, field: string, value: string) {
        const newSchedule = schedule.map((scheduleItem, itemPosition) => {
            if (itemPosition === elementPosition) {
                return { ...scheduleItem, [field]: value }
            }

            return scheduleItem;
        })

        setSchedule(newSchedule);
    }

    return (
        <div id="page-teacher-form" className="container">
            <Header
                title="Que legal você querer ser um proffy"
                subtitle="Preencha esses dados para cadastrar sua aula"
            />

            <main>
                <form onSubmit={handleFormSubmit}>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input
                            name="name"
                            label="Nome completo"
                            value={name}
                            onChange={event => {
                                setName(event.target.value)
                            }}
                        />
                        <TextArea
                            name="bio"
                            label="Biografia resumida"
                            value={bio}
                            onChange={event => {
                                setBio(event.target.value)
                            }}
                        />
                        <Input
                            name="whatsapp"
                            label="Seu WhatsApp"
                            value={whatsapp}
                            onChange={event => {
                                setWhatsapp(event.target.value)
                            }}
                        />
                        <Input
                            name="avatar"
                            label="URL da sua Avatar"
                            value={avatar}
                            onChange={event => {
                                setAvatar(event.target.value)
                            }}
                        />

                    </fieldset>
                    <fieldset>
                        <legend>Sobre a aula</legend>

                        <Input
                            name="subject"
                            label="Matéria"
                            value={subject}
                            onChange={event => {
                                setSubject(event.target.value)
                            }}
                        />
                        <TextArea
                            name="description"
                            label="Descrição"
                            value={description}
                            onChange={event => {
                                setDescription(event.target.value)
                            }}
                        />
                        <Input
                            name="price"
                            label="Custo por hora de aula"
                            value={price}
                            onChange={event => {
                                setPrice(event.target.value)
                            }}
                        />

                    </fieldset>
                    <fieldset>
                        <legend>
                            Horários de atendimento
                        <button type="button" onClick={addNewScheduleItem}>
                                + Novo horário
                        </button>
                        </legend>
                        {
                            schedule.map((scheduleItem, index) => {
                                return (
                                    <div key={index} className="schedule-item">
                                        <Select
                                            name="week_day"
                                            label="Dia da semana"
                                            value={scheduleItem.week_day}
                                            options={[
                                                { value: "1", label: "Segunda-feira" },
                                                { value: "2", label: "Terça-feira" },
                                                { value: "3", label: "Quarta-feira" },
                                                { value: "4", label: "Quinta-feira" },
                                                { value: "5", label: "Sexta-feira" },
                                                { value: "6", label: "Sábado" },
                                                { value: "7", label: "Domingo" }
                                            ]}
                                            onChange={event => {
                                                setScheduleItem(index, "week_day", event.target.value)
                                            }}
                                        />
                                        <Input
                                            type="time"
                                            name="from"
                                            label="Início"
                                            value={scheduleItem.from}
                                            onChange={event => {
                                                setScheduleItem(index, "from", event.target.value);
                                            }}
                                        />

                                        <Input
                                            type="time"
                                            name="to"
                                            label="Fim"
                                            value={scheduleItem.to}
                                            onChange={event => {
                                                setScheduleItem(index, "to", event.target.value)
                                            }}
                                        />
                                    </div>
                                );
                            })
                        }
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Ícone de exclamação" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                        <button type="submit">
                            Salvar cadastro
                    </button>
                    </footer>
                </form>
            </main>
        </div>
    );
}

export default TeacherForm;