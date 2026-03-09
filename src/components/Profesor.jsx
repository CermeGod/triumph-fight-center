import './Profesor.css';
import { Instagram, Facebook } from 'lucide-react';
import joelImg1 from '../assets/profesor-joel-imagen1.webp';
import joelImg2 from '../assets/Profeso-Joel-imagen2.webp';

const Profesor = () => {
    return (
        <section className="profesor-section">
            <div className="container">
                <div className="profesor-card">
                    <div className="profesor-img-side has-crossfade">
                        <img
                            src={joelImg1}
                            alt="Profesor Principal Triumph Fight Center"
                            className="profesor-img base-img"
                            width="400" height="500" loading="lazy"
                        />
                        <img
                            src={joelImg2}
                            alt="Profesor Principal Triumph Fight Center Accion"
                            className="profesor-img crossfade-img"
                            width="400" height="500" loading="lazy"
                        />
                    </div>
                    <div className="profesor-text-side">
                        <span className="section-badge">Director & Headcoach - Joel Alvarez</span>
                        <h2>Liderando con el Ejemplo</h2>
                        <ul className="profesor-skills">
                            <li><strong>Especialización:</strong> Muay Thai - KickBoxing - Box y Preparación Física</li>
                            <li><strong>Exp:</strong> 15 años</li>
                            <li><strong>Movimiento Estrella:</strong> TODOS</li>
                            <li><strong>Personalidad:</strong> Estricto pero divertido, amante del buen café.</li>
                        </ul>
                        <p className="quote">
                            "Transmitiendo conocimiento con pasión, integridad y un nivel técnico impecable para forjar la mente de cada guerrero."
                        </p>
                        <div className="profesor-socials" style={{ display: 'flex', gap: '20px', marginTop: '20px', paddingLeft: '15px' }}>
                            <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }} aria-label="Instagram de Joel">
                                <Instagram size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profesor;
