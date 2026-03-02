import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="site-header">
            <div className="logo">TRIUMPH FIGHT CENTER</div>
            <nav className="main-nav">
                <ul>
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#clases">Clases</a></li>
                    <li><a href="#horarios">Horarios</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
