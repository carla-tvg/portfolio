import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import './VideoMe.css'; 

const VideoMe = () => {
    const { isDarkMode } = useTheme();
    const { language } = useLanguage();

    return (
        <section className={`video-of-me ${isDarkMode ? 'video-dark' : 'video-light'}`}>
            <h2>{language === 'es' ? 'Sobre mí' : 'About me'}</h2>

            {language === 'es' ? (
                <video className="about-me-video" controls>
                    <source src="/path-to-your-spanish-video.mp4" type="video/mp4" />
                    Tu navegador no soporta el formato de video.
                </video>
            ) : (
                <video className="about-me-video" controls>
                    <source src="/path-to-your-english-video.mp4" type="video/mp4" />
                    Your browser does not support the video format.
                </video>
            )}
        </section>
    );
};

export default VideoMe;
