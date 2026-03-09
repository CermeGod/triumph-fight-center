import './Header.css';
import { useState, useEffect } from 'react';
import { Settings, Moon, Sun, Monitor, EyeOff } from 'lucide-react';
import logo from '../assets/Superlogo.png';
import logoUnico from '../assets/Logo-Unico-header-footer-favicon.webp';

const Header = () => {
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [theme, setTheme] = useState('dark');
    const [isHidden, setIsHidden] = useState(false);

    // Efecto para aplicar modo claro/oscuro en tiempo real al HTML body
    useEffect(() => {
        document.body.classList.remove('light-mode', 'dim-mode', 'unico-mode');
        const favicon = document.querySelector('link[rel="icon"]');

        if (theme === 'light') {
            document.body.classList.add('light-mode');
            if (favicon) favicon.href = "/vite.svg";
        } else if (theme === 'dim') {
            document.body.classList.add('dim-mode');
            if (favicon) favicon.href = "/vite.svg";
        } else if (theme === 'unico') {
            document.body.classList.add('unico-mode');
            if (favicon) favicon.href = logoUnico;
        } else {
            if (favicon) favicon.href = "/vite.svg";
        }
    }, [theme]);

    return (
        <header className={`header ${theme === 'light' ? 'light-header' : 'dark-header'}`}>
            <div className="container header-inner">
                {/* 1. Izquierda: Logo */}
                <a href="/" className="logo-placeholder">
                    <img src={logo} alt="Triumph Fight Center Logo" className="logo-img default-only" />
                    <img src={logoUnico} alt="Triumph Unico Logo" className="logo-img unico-only" />
                </a>

                <nav className="nav">
                    <ul className="nav-list">
                        <li><a href="#clase">Primera Clase</a></li>
                        <li><a href="#gloria">Sala de Trofeos</a></li>
                        <li><a href="#planes">Nuestros Planes</a></li>
                        <li><a href="#eventos">Eventos</a></li>
                    </ul>
                </nav>

                <div className="header-actions">
                    <div className="settings-menu">
                        <button
                            className="settings-btn"
                            onClick={() => setSettingsOpen(!settingsOpen)}
                            aria-label="Configuración"
                        >
                            <Settings size={22} className="settings-icon" />
                        </button>

                        {settingsOpen && (
                            <div className="settings-dropdown">
                                <div className="dropdown-item">
                                    <div className="item-label">
                                        {theme === 'dark' ? <Moon size={16} /> : theme === 'light' ? <Sun size={16} /> : <Monitor size={16} />}
                                        <span>Tema Visual</span>
                                    </div>
                                    <select
                                        className="language-select"
                                        value={theme}
                                        onChange={(e) => setTheme(e.target.value)}
                                    >
                                        <option value="dark">Nocturno</option>
                                        <option value="dim">Gris Combate</option>
                                        <option value="light">Día</option>
                                        <option value="unico">Único</option>
                                    </select>
                                </div>
                                <div className="dropdown-divider"></div>
                                <div className="dropdown-item clickable-hide" onClick={() => { setIsHidden(true); setSettingsOpen(false); }} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center' }}>
                                    <div className="item-label" style={{ color: '#ff4757' }}>
                                        <EyeOff size={16} />
                                        <span>Ocultar Menú</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Float Config Button when Header is Hidden */}
            <div className={`floating-restore-btn ${isHidden ? 'visible' : ''}`}>
                <button
                    className="settings-btn shadow-strong"
                    onClick={() => setIsHidden(false)}
                    aria-label="Mostrar Menú"
                >
                    <Settings size={22} className="settings-icon" />
                </button>
            </div>
        </header>
    );
};

export default Header;
