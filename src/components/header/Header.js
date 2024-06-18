import { Link } from 'react-router-dom';
import { LogoIcon, LogoutIcon, QuestionMarkIcon } from '../../assets/header';
import './Header.css';
import React from 'react';
import Modal from './Modal';


function Header() {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    return (
        <header id="header">
            <Link id='header-logo' to="/">
                <LogoIcon id="logo-icon" />
                <div id='header-title'>Chat<br/>Bot</div>
            </Link>

            <QuestionMarkIcon id="question-mark-icon" onClick={openModal} />
            <LogoutIcon id="logout-icon" />
            <Modal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
        </header>
    );
}

export default Header;
