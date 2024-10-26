
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext'; 
import './Footer.css'; 

const Footer = () => {
    const { isDarkMode } = useTheme(); 
    const { language } = useLanguage(); 

  
    const texts = {
        es: '© 2024 Carla Valderrama. Todos los derechos reservados.',
        en: '© 2024 Carla Valderrama. All rights reserved.',
    };

    return (
        <footer className={`footer ${isDarkMode ? 'footer-dark' : ''}`}>
            <p>{texts[language]}</p> {}
        </footer>
    );
};

export default Footer;
