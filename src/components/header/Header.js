import { Link } from 'react-router-dom';
import { LogoIcon, LogoutIcon, QuestionMarkIcon } from '../../assets/header';
import './Header.css';
import React from 'react';
import Modal from './Modal';


function Header({ setAccessToken, setIsLogin, setHasGradCard, isLogin }) {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalContent, setModalContent] = React.useState('');

    function handleQuestionClick() {
        setModalContent('question');
        setIsOpen(true);
    }

    function handleLogoutClick() {
        setModalContent('logout');
        setIsOpen(true);
    }

    return (
        <header id="header">
            <Link id='header-logo' to="/">
                <LogoIcon id="logo-icon" />
                {/* <div id='header-title'>Chat<br/>Bot</div> */}
            </Link>

            <QuestionMarkIcon id="question-mark-icon" onClick={handleQuestionClick} />
            {isLogin && <LogoutIcon id="logout-icon" onClick={handleLogoutClick} />}
            <Modal
                isLogin={isLogin}
                modalIsOpen={modalIsOpen} 
                setIsOpen={setIsOpen} 
                modalContent={modalContent}
                setIsLogin={setIsLogin}
                setHasGradCard={setHasGradCard}
                setAccessToken={setAccessToken} />
        </header>
    );
}

export default Header;
