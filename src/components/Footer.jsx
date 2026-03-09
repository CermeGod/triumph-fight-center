import './Footer.css';
import { Instagram, Facebook, Share2, MapPin, Phone } from 'lucide-react';
import logo from '../assets/Superlogo.webp';
import logoUnico from '../assets/Logo-Unico-header-footer-favicon.webp';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-inner">
                <div className="footer-info">
                    <a href="/">
                        <img src={logo} alt="Triumph Fight Center Footer Logo" className="footer-logo-img default-only" />
                        <img src={logoUnico} alt="Triumph Fight Center Footer Logo" className="footer-logo-img unico-only" />
                    </a>
                </div>

                <div className="footer-contact">
                    <div className="contact-item">
                        <MapPin size={24} className="icon" />
                        <address><a href="https://maps.google.com/?q=Av.+Primavera+1288,+Santiago+de+Surco+15023" target="_blank" rel="noopener noreferrer">Av. Primavera 1288, Santiago de Surco 15023</a></address>
                    </div>
                    <div className="contact-item">
                        <Phone size={24} className="icon" />
                        <p><a href="tel:+51900966701">900 966 701</a></p>
                    </div>
                </div>

                <div className="footer-social">
                    <p>Síguenos:</p>
                    <div className="social-links">
                        <a href="https://www.instagram.com/triumphfightcenter.peru/?hl=es" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <Instagram size={24} />
                        </a>
                        <a href="https://www.facebook.com/p/Triumph-Fight-Center-61556514788548/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <Facebook size={24} />
                        </a>
                        <a href="https://www.tiktok.com/@triumphfightcenter.peru" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                            <svg viewBox="0 0 448 512" width="18" height="20" fill="currentColor" style={{ margin: '2px', overflow: 'visible' }}>
                                <path d="M448 209.91a210.06 210.06 0 01-122.77-39.25v178.72A162.55 162.55 0 11162.55 78.52v79.14a83.38 83.38 0 1083.39 83.39V0h79.15a163.51 163.51 0 00122.91 163.76z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>© {new Date().getFullYear()} Triumph Fight Center. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
