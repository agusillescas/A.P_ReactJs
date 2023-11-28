import React from 'react';
import '../assets/styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">Rutina Gym</div>
                <ul className="nav-list">
                    <li>Lista de Tareas</li>
                    <li>Formulario</li>
                    <li>Contacto</li>
                    <li>Inicio</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;