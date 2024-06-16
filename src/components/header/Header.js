import { Link } from 'react-router-dom';
import { LogoIcon, QuestionMarkIcon } from '../../assets/header';
import './Header.css';
import React from 'react';


function Header() {
    return (
        <header id="header">
            <Link id='header-logo' to="/">
                <LogoIcon id="logo-icon" />
                <div id='header-title'>Chat<br/>Bot</div>
            </Link>

            <QuestionMarkIcon id="question-mark-icon" />
        </header>
    );
}

export default Header;
