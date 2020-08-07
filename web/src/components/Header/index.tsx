import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import backIcon from "../../assets/images/icons/back.svg";
import logoImg from "../../assets/images/logo.svg";

interface HeaderProps {
    title: string,
    subtitle?: string,
    children?: any
}

function Header(props: HeaderProps) {
    const { title, children, subtitle } = props;
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
                {subtitle && <p>{subtitle}</p>}
                
                {children}
            </div>
        </header>
    );
}

export default Header;