import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import './MyJourney.css';

const MyJourney = () => {
    const { isDarkMode } = useTheme();
    const { language } = useLanguage();

    const texts = {
        es: {
            title: 'Mi Trayectoria',
            steps: [
                { year: '2017', text: 'Comencé estudios en Ingeniería de Software' },
                { year: '2021', text: 'Me gradué como ingeniera de software' },
                { year: '2023', text: 'Trabajé como Freelance' },
                { year: '2024', text: 'Especializándome en Desarrollo Fullstack con Java' }
            ]
        },
        en: {
            title: 'My Journey',
            steps: [
                { year: '2017', text: 'Started studies on Software Engineering' },
                { year: '2021', text: 'I graduated as a software engineer' },
                { year: '2023', text: 'Worked as Freelancer' },
                { year: '2024', text: 'Specializing in Java Fullstack Development' }
            ]
        }
    };

    const currentTexts = texts[language];

    return (
        <section className={`my-journey ${isDarkMode ? 'journey-dark' : 'journey-light'}`}>
            <h2>{currentTexts.title}</h2>
            <div className="journey-timeline">
                {currentTexts.steps.map((step, index) => (
                    <div key={index} className={`journey-step ${index % 2 === 0 ? 'left' : 'right'}`}>
                        <div className="journey-card">
                            <div className="journey-icon">
                                <img src={`/icons/icon-${index + 1}.png`} alt={`Icono paso ${index + 1}`} />
                            </div>
                            <div className="journey-content">
                                <p>{step.text}</p>
                                <span>{step.year}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MyJourney;
