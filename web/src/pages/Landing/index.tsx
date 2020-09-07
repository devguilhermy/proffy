import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

import "./styles.css";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import teachIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

function Landing() {
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get("/connections").then((response) => {
            setTotalConnections(response.data.total);
        });
    }, []);

    return (
        <div id="landing-page">
            <div id="landing-page-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy Logo" />
                    <h2>Sua plataforma de estudos online</h2>
                </div>
                <img
                    src={landingImg}
                    alt="Banner"
                    className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar" />
                        Estudar
                    </Link>
                    <Link to="/teach" className="teach">
                        <img src={teachIcon} alt="Ensinar" />
                        Ensinar
                    </Link>
                </div>

                <span className="total-connections">
                    Já foram realizadas {totalConnections} conexões
                    pela plataforma
                    <img src={purpleHeartIcon} alt="Coração roxo" />
                </span>
            </div>
        </div>
    );
}

export default Landing;
