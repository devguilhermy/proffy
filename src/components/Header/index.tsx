import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import backIcon from "../../assets/images/icons/back.svg";
import logoImg from "../../assets/images/logo.svg";

interface HeaderProps {
    title: String
}

const Header: React.FunctionComponent<HeaderProps> = ({children, title}) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/" className="button-back">
                    <img src={backIcon} alt="Ícone de voltar" />
                </Link>
                <img src={logoImg} alt="" />
            </div>
            <div className="header-content">
                <strong>{title}</strong>
                {children }
            </div>
        </header>
    );
}

export default Header;