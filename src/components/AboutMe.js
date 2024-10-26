import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import Button from './Button'; 
import './AboutMe.css'; 
import imagenCarla from '../assets/carla.png'; 
import CV from '../assets/CarlaValderrama.pdf';


const AboutMe = () => {
    const { isDarkMode } = useTheme();
    const { language } = useLanguage();

    const texts = {
        es: {
            title: 'Desarrolladora Fullstack Java',
            description: 'Soy Carla Valderrama, ingeniera de software especializada en desarrollo Fullstack con Java. Me apasiona crear soluciones eficientes y efectivas.',
            downloadCV: 'Descargar CV',
        },
        en: {
            title: 'Fullstack Java Developer',
            description: 'I am Carla Valderrama, a software engineer specializing in Fullstack development with Java. I am passionate about creating efficient and effective solutions.',
            downloadCV: 'Download CV',
        },
    };

    const currentTexts = texts[language];

    return (
        <section className={`about-me ${isDarkMode ? 'about-dark' : 'about-light'}`}>
            <div className="text-container">
                <h1>{currentTexts.title}</h1>
                <p>{currentTexts.description}</p>
                <a href={CV} download="CV_Carla_Valderrama.pdf">
                    <Button text={currentTexts.downloadCV} />
                </a>
            </div>
            <div className={`image-container ${isDarkMode ? 'image-container-dark' : ''}`}>
                <img src={imagenCarla} alt="Carla Valderrama" />
            </div>
        </section>
    );
};

export default AboutMe;
