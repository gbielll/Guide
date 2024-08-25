import React, { useState } from 'react';
import logo  from "../images/logo.png";

import './styles.css'; 

function TopBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="topbar-container">

           <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />

            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>

            <div className={`menu ${isMenuOpen ? 'show' : ''}`}>
                <button className="menu-close" onClick={toggleMenu}>
                    ×
                </button>
                <ul>
                    <li>Home</li>
                    <li>Objetivos</li>
                    <li>Benefícios</li>
                    <li>Team Guide</li>
                </ul>
            </div>

            <ul className={`nav-links ${isMenuOpen ? 'hidden' : ''}`}>
                <li>Home</li>
                <li>Objetivos</li>
                <li>Benefícios</li>
                <li>Team Guide</li>
            </ul>

            <button className="download-button">Download</button>
        </div>
    );
}

export default TopBar;
