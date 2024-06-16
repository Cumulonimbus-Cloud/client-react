import { LogoIcon, QuestionMarkIcon } from '../../assets/header';
import React from 'react';


function Header() {
    return (
        <header id="header">
            <div id='header-logo'>
                <LogoIcon id="logo-icon" />
                <div id='header-title'>Chat<br/>Bot</div>
            </div>

            <QuestionMarkIcon id="question-mark-icon" />
        </header>
    );
}

export default Header;