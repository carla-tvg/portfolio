import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'; // aquí van los iconos
import ReactCountryFlag from "react-country-flag";
import './NavBar.css';

const NavBar = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const { language, toggleLanguage } = useLanguage();
    const [menuOpen, setMenuOpen] = useState(false); // estado para el menú hamburguesa

    const toggleMenu = () => setMenuOpen(!menuOpen); // alternar visibilidad del menú

   
    const texts = {
        es: {
            inicio: 'Inicio',
            acerca: 'Acerca',
            portafolio: 'Portafolio',
            blog: 'Blog',
            contactame: 'Contáctame',
            switchToDark: 'Oscuro',
            switchToLight: 'Claro',
            switchLanguage: 'EN',
        },
        en: {
            inicio: 'Home',
            acerca: 'About',
            portafolio: 'Portfolio',
            blog: 'Blog',
            contactame: 'Contact Me',
            switchToDark: 'Dark',
            switchToLight: 'Light',
            switchLanguage: 'ES',
        },
    };

    const currentTexts = texts[language];

    return (
        
            <nav className={`navbar ${isDarkMode ? 'navbar-dark' : ''}`}>
                <h1 className="logo">&lt;/Carla Valderrama&gt;</h1>

                {/*  hamburguesa */}
                <button 
                    className="hamburger-button" 
                    onClick={toggleMenu} 
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen} // mejora de accesibilidad
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Menú de enlaces */}
                <ul className={`nav-links ${menuOpen ? 'nav-active' : ''}`} role="menu" aria-hidden={!menuOpen}>
                    <li role="none">
                        <a href="#inicio" role="menuitem" onClick={toggleMenu}>{currentTexts.inicio}</a>
                    </li>
                    <li role="none">
                        <a href="#acerca" role="menuitem" onClick={toggleMenu}>{currentTexts.acerca}</a>
                    </li>
                    <li role="none">
                        <a href="#portafolio" role="menuitem" onClick={toggleMenu}>{currentTexts.portafolio}</a>
                    </li>
                    <li role="none">
                        <a href="#blog" role="menuitem" onClick={toggleMenu}>{currentTexts.blog}</a>
                    </li>
                    <li role="none">
                        <a href="#contactame" role="menuitem" onClick={toggleMenu}>{currentTexts.contactame}</a>
                    </li>
                </ul>

                <div className="nav-actions">
                    <button 
                        onClick={toggleTheme} 
                        className="theme-button" 
                        aria-label={isDarkMode ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
                    >
                        {isDarkMode ? <FaSun /> : <FaMoon />}
                        <span className="button-text">
                            {isDarkMode ? currentTexts.switchToLight : currentTexts.switchToDark}
                        </span>
                    </button>
                    <button 
                        onClick={toggleLanguage} 
                        className="language-button" 
                        aria-label={`Cambiar idioma a ${currentTexts.switchLanguage}`}
                    >
                        <ReactCountryFlag
                            countryCode={language === 'es' ? 'US' : 'CO'}
                            svg
                            style={{
                                width: '1.5em',
                                height: '1.5em',
                            }}
                            title={currentTexts.switchLanguage}
                        />
                        <span className="button-text">
                            {currentTexts.switchLanguage}
                        </span>
                    </button>
                </div>
            </nav>
      
    );
};

export default NavBar;
