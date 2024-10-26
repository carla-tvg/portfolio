import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import './Blog.css';

const Blog = () => {
    const { isDarkMode } = useTheme();
    const { language } = useLanguage();

    const texts = {
        es: {
            title: 'Mi Blog',
            posts: [
                {
                    title: 'Entrada 1',
                    description: 'Descripción de la entrada ',
                    link: '#'
                },
                {
                    title: 'Entrada 2',
                    description: 'Descripción de la entrada.',
                    link: '#'
                },
                {
                    title: 'Entrada 3',
                    description: 'Descripción de la entrada',
                    link: '#'
                }
            ]
        },
        en: {
            title: 'My Blog',
            posts: [
                {
                    title: 'Post 1',
                    description: 'Description of post ',
                    link: '#'
                },
                {
                    title: 'Post 2',
                    description: 'Description of post ',
                    link: '#'
                },
                {
                    title: 'Post 3',
                    description: 'Description of post ',
                    link: '#'
                }
            ]
        }
    };

    const currentTexts = texts[language];

    return (
        <section className={`blog ${isDarkMode ? 'blog-dark' : 'blog-light'}`}>
            <h2>{currentTexts.title}</h2>
            <div className="blog-grid">
                {currentTexts.posts.map((post, index) => (
                    <div key={index} className="blog-item">
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                        <a href={post.link} target="_blank" rel="noopener noreferrer">Leer Más</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blog;
