import './Hero.css';
import { MapPin } from 'lucide-react';
import heroImage from '../assets/imagen-principal-hero.webp'; // Updated image
import superLogo from '../assets/Superlogo.webp';
import logoUnicoH1 from '../assets/logo-unico-h1.webp';
import { Instagram, Facebook } from 'lucide-react'; // Added import
import fotoGrupal from '../assets/foto-grupal-3.webp';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <div className="hero-text-side">
                    <h1 className="visually-hidden">Triumph Fight Center</h1>
                    <img src={superLogo} alt="Triumph Fight Center Logo" className="hero-logo-super default-only" width="800" height="280" fetchPriority="high" loading="eager" />
                    <img src={logoUnicoH1} alt="Triumph Fight Center Unico" className="hero-logo-super unico-only" width="600" height="240" loading="lazy" />
                    <p className="hero-subtitle">
                        Especialistas en Muay Thai, Boxeo y Kickboxing. <br />
                        <span className="teens-subtitle">También contamos con Kickboxing Teens & Muay Thai Teens.</span>
                    </p>
                    <hr className="hero-divider" />

                    <div className="hero-location-badge">
                        <MapPin size={16} className="pin-icon" />
                        <span>Av. Primavera 1288, Surco, Lima</span>
                    </div>

                    <div className="hero-actions">
                        <a href="https://wa.me/51900966701" target="_blank" rel="noopener noreferrer" className="btn-primary">Primera Clase Gratis</a>
                        <a href="#planes" className="btn-outline">Nuestros Planes</a>
                    </div>

                    <div className="hero-socials" style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '30px' }}>
                        <a href="https://www.instagram.com/triumphfightcenter.peru/?hl=es" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', display: 'flex' }} aria-label="Instagram Triumph Fight Center">
                            <Instagram size={28} />
                        </a>
                        <a href="https://www.facebook.com/p/Triumph-Fight-Center-61556514788548/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', display: 'flex' }} aria-label="Facebook Triumph Fight Center">
                            <Facebook size={28} />
                        </a>
                        <a href="https://www.tiktok.com/@triumphfightcenter.peru" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', display: 'flex' }} aria-label="TikTok Triumph Fight Center">
                            <svg viewBox="0 0 448 512" width="20" height="22" fill="currentColor" style={{ overflow: 'visible' }}>
                                <path d="M448 209.91a210.06 210.06 0 01-122.77-39.25v178.72A162.55 162.55 0 11162.55 78.52v79.14a83.38 83.38 0 1083.39 83.39V0h79.15a163.51 163.51 0 00122.91 163.76z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="hero-image-side">
                    <img src={fotoGrupal} alt="Entrenamiento intensivo en Triumph Fight Center, academia líder de Muay Thai y Boxeo en Surco" className="hero-img" width="500" height="600" fetchPriority="high" loading="eager" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
