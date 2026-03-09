import './Footer.css';
import { Instagram, Facebook, Share2, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-inner">
                <div className="footer-info">
                    <h3 className="footer-logo">TRIUMPH</h3>
                    <p className="footer-desc">
                        El centro de combate y entrenamiento funcional líder en Lima. Transformamos vidas a través de la disciplina y el deporte de contacto.
                    </p>
                </div>

                <div className="footer-contact">
                    <div className="contact-item">
                        <MapPin size={24} className="icon" />
                        <address>Av. Primavera 1288, Santiago de Surco 15023</address>
                    </div>
                    <div className="contact-item">
                        <Phone size={24} className="icon" />
                        <p>900 966 701</p>
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
                            <Share2 size={24} />
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
