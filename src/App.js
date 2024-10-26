// src/App.js
import React, { useEffect } from 'react';
import { useTheme } from './context/ThemeContext'; // Asegúrate de que la ruta sea correcta
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import VideoMe from './components/VideoMe';
import MyJourney from './components/MyJourney';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import './App.css';

const App = () => {
    const { isDarkMode } = useTheme();

    useEffect(() => {
       
        document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
    }, [isDarkMode]);

    return (
        <div>
            <NavBar />
            <AboutMe />
            <VideoMe/>
            <MyJourney/>
            <Portfolio/>
            <Blog/>
            <Contact/>
            <Footer />
            {}
        </div>
    );
};

export default App;
