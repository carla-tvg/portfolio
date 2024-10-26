import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import './Portfolio.css';

const Portfolio = () => {
    const { isDarkMode } = useTheme();
    const { language } = useLanguage();

    const texts = {
        es: {
            title: 'Mi Portafolio',
            projects: [
                {
                    title: 'Proyecto 1',
                    description: 'Descripción del proyecto 1...',
                    link: '#'
                },
                {
                    title: 'Proyecto 2',
                    description: 'Descripción del proyecto 2...',
                    link: '#'
                },
                {
                    title: 'Proyecto 3',
                    description: 'Descripción del proyecto 3...',
                    link: '#'
                }
            ]
        },
        en: {
            title: 'My Portfolio',
            projects: [
                {
                    title: 'Project 1',
                    description: 'Description of project 1...',
                    link: '#'
                },
                {
                    title: 'Project 2',
                    description: 'Description of project 2...',
                    link: '#'
                },
                {
                    title: 'Project 3',
                    description: 'Description of project 3...',
                    link: '#'
                }
            ]
        }
    };

    const currentTexts = texts[language];

    return (
        <section className={`portfolio ${isDarkMode ? 'portfolio-dark' : 'portfolio-light'}`}>
            <h2>{currentTexts.title}</h2>
            <div className="portfolio-grid">
                {currentTexts.projects.map((project, index) => (
                    <div key={index} className="portfolio-item">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
