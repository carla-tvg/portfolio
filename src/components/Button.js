import React from 'react';
import './Button.css'; // Importar estilos del botón

const Button = ({ text, onClick }) => {
    return (
        <button className="button" onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
