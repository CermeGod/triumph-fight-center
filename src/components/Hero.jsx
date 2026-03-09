import './Hero.css';
import { MapPin } from 'lucide-react';
// import heroImage from '../assets/imagen-banner-hero.webp'; // Descomentarlo cuando se tenga

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <div className="hero-text-side">
                    <div className="hero-location-badge">
                        <MapPin size={16} className="pin-icon" />
                        <span>Av. Primavera 1288, Surco, Lima</span>
                    </div>
                    <h1 className="hero-title">Triumph Fight Center</h1>
                    <p className="hero-subtitle">Especialistas en Muay Thai y Boxeo. Ven y descubre el poder de pertenecer a nuestra comunidad de guerreros.</p>
                    <hr className="hero-divider" />
                    <div className="hero-actions">
                        <button className="btn-primary">Primera Clase Gratis</button>
                    </div>
                </div>
                <div className="hero-image-side">
                    {/* Placeholder div in case there is no image yet */}
                    {/* <img src={heroImage} alt="Guerrero Triumph Fight Center" className="hero-img" /> */}
                    <div className="hero-img-placeholder">Fondo Principal irá aquí</div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
