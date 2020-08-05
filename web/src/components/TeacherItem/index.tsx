import React from "react";

import "./styles.css";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/55157846?s=400&u=0279c4d4bc44669d9aba39f79a4050c289c8f525&v=4" alt="Avatar do proffy" />
                <div>
                    <strong>Good Developer</strong>
                    <span>Programação com Javascript</span>
                </div>
            </header>
            <p>
                Desenvolvedor Javascript apaixonado por resolver problemas através de aplicações úteis e intuitivas
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 500,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Ícone do Whatsapp" />
                        Entrar em contato
                    </button>
            </footer>
        </article>
    );
}

export default TeacherItem;