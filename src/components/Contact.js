import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

const Contact = () => {
    const { isDarkMode } = useTheme();
    const { language } = useLanguage();
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const texts = {
        es: {
            title: 'Contáctame',
            name: 'Nombre',
            email: 'Correo electrónico',
            message: 'Mensaje',
            send: 'Enviar',
            success: '¡Mensaje enviado con éxito!',
        },
        en: {
            title: 'Contact Me',
            name: 'Name',
            email: 'Email',
            message: 'Message',
            send: 'Send',
            success: 'Message sent successfully!',
        },
    };

    const currentTexts = texts[language];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(currentTexts.success);
        setFormData({ name: '', email: '', message: '' }); // resetear el formulario
    };

    return (
        <section className={`contact ${isDarkMode ? 'contact-dark' : 'contact-light'}`}>
            <h2>{currentTexts.title}</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">{currentTexts.name}</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">{currentTexts.email}</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">{currentTexts.message}</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">{currentTexts.send}</button>
            </form>
        </section>
    );
};

export default Contact;
