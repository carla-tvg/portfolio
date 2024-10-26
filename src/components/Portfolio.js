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
                    title: 'Hackaton Web Page',
                    description: 'Descripción del proyecto ',
                    link: '#'
                },
                {
                    title: 'API restful',
                    description: 'Descripción del proyecto 2',
                    link: '#'
                },
                {
                    title: 'Geek Hub Ecommerce',
                    description: 'Descripción del proyecto 3',
                    link: '#'
                }
            ]
        },
        en: {
            title: 'My Portfolio',
            projects: [
                {
                    title: 'Hackaton Web Pag',
                    description: 'Description of project ',
                    link: '#'
                },
                {
                    title: 'API restful',
                    description: 'Description of project',
                    link: '#'
                },
                {
                    title: 'Geek Hub Ecommerce',
                    description: 'Description of project',
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
