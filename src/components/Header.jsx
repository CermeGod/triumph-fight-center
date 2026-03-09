import './Header.css';
import { useState, useEffect } from 'react';
import { Settings, Globe, Moon, Sun } from 'lucide-react';
// import logo from '../assets/Logo.jpg'; // Descomentarlo cuando se tenga la imagen real

const Header = () => {
    const [settingsOpen, setSettingsOpen] = useState(false);

    // Check initial OS theme or default to dark
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [language, setLanguage] = useState('es');

    // Efecto para aplicar modo claro/oscuro en tiempo real al HTML body
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
        }
    }, [isDarkMode]);

    return (
        <header className={`header ${isDarkMode ? 'dark-header' : 'light-header'}`}>
            <div className="container header-inner">
                <a href="/" className="logo-placeholder">
                    {/* <img src={logo} alt="Triumph Fight Center Logo" className="logo-img" /> */}
                    <span className="logo-text-placeholder">TRIUMPH</span>
                </a>

                <div className="right-controls">
                    <nav className="nav">
                        <ul className="nav-list">
                            <li><a href="#unete">{language === 'es' ? 'Únete a nosotros' : 'Join Us'}</a></li>
                            <li><a href="#clase">{language === 'es' ? 'Primera Clase' : 'First Class'}</a></li>
                            <li><a href="#gloria">{language === 'es' ? 'Sala de Trofeos' : 'Trophy Room'}</a></li>
                            <li><a href="#planes">{language === 'es' ? 'Nuestros Planes' : 'Our Plans'}</a></li>
                            <li><a href="#eventos">{language === 'es' ? 'Eventos' : 'Events'}</a></li>
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
                                            {isDarkMode ? <Moon size={16} /> : <Sun size={16} />}
                                            <span>Tema {isDarkMode ? 'Oscuro' : 'Claro'}</span>
                                        </div>
                                        <div
                                            className={`toggle-switch ${!isDarkMode ? 'toggled-light' : ''}`}
                                            onClick={() => setIsDarkMode(!isDarkMode)}
                                        >
                                            <div className="toggle-knob"></div>
                                        </div>
                                    </div>
                                    <div className="dropdown-divider"></div>
                                    <div className="dropdown-item">
                                        <div className="item-label">
                                            <Globe size={16} />
                                            <span>Idioma</span>
                                        </div>
                                        <select
                                            className="language-select"
                                            value={language}
                                            onChange={(e) => setLanguage(e.target.value)}
                                        >
                                            <option value="es">ES</option>
                                            <option value="en">EN</option>
                                        </select>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
