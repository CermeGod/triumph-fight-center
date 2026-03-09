import './Gloria.css';
import { Medal, Trophy, Star, Crown, ChevronRight } from 'lucide-react';
import leonardoImg from '../assets/Campeon.Leonardo Palomino.jpeg';

const Gloria = () => {
    return (
        <section id="gloria" className="trophy-room-section">
            <div className="container">
                <div className="trophy-header text-center">
                    <span className="section-badge">Nuestra Gloria</span>
                    <h2>Sala de Campeones</h2>
                    <p className="trophy-subtitle">
                        El tatami donde se forjan campeones. Conoce nuestros logros y la sangre derramada por obtener la victoria en el circuito nacional.
                    </p>
                </div>

                <div className="champions-list" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                    <article className="hall-of-fame">
                        <div className="hof-image-side">
                            <img src="src/assets/CAMEPON PALOMINO.png" alt="Campeón Leonardo Palomino entrenando en Triumph Fight Center Surco" className="champion-img" />
                        </div>
                        <div className="hof-content">
                            <div className="champion-badge">
                                <Star size={16} /> CAMPEÓN 63,500 KICKBOXING - K1
                            </div>
                            <h3>Leonardo Palomino</h3>
                            <ul className="profesor-skills" style={{ marginBottom: "20px" }}>
                                <li><strong>Especialización:</strong> Muay Thai / Kickboxing</li>
                                <li><strong>Exp:</strong> 6 años</li>
                                <li><strong>Movimiento Estrella:</strong> High Kick</li>
                                <li><strong>Personalidad:</strong> Silencioso pero letal, siempre sonriendo.</li>
                            </ul>
                            <p className="quote gloria-quote">
                                "El dolor es temporal, el orgullo es para siempre."
                            </p>
                            <a href="https://wa.me/51900966701" target="_blank" rel="noopener noreferrer" className="champion-link">
                                Sé como Leonardo <ChevronRight size={16} />
                            </a>
                        </div>
                    </article>

                    <article className="hall-of-fame">
                        <div className="hof-image-side has-crossfade-3">
                            <img src="src/assets/campeona-sudamericanda.jpg" alt="Katerine Vargas Campeona" className="champion-img cf-img cf-img-1" />
                            <img src="src/assets/campeona-2do-lugar-brasil-foto2.jpeg" alt="Katerine Vargas Accion" className="champion-img cf-img cf-img-2" />
                            <img src="src/assets/campeona-2dolugar-brasil.jpeg" alt="Katerine Vargas Tercera" className="champion-img cf-img cf-img-3" />
                        </div>
                        <div className="hof-content">
                            <div className="champion-badge">
                                <Star size={16} /> Sub-Campeona Sudamericana KickBoxing (Brasil 2025)
                            </div>
                            <h3>Katerine Vargas</h3>
                            <ul className="profesor-skills" style={{ marginBottom: "20px" }}>
                                <li><strong>Especialización:</strong> Muay Thai / Kickboxing</li>
                                <li><strong>Exp:</strong> 25 años</li>
                                <li><strong>Movimiento Estrella:</strong> Low kick</li>
                                <li><strong>Personalidad:</strong> Tranquila en los entrenamientos pero agresividiad al 100% en el ring, no deja aperturas.</li>
                            </ul>
                            <p className="quote gloria-quote">
                                "La mejor defensa es el ataque."
                            </p>
                            <a href="https://wa.me/51900966701" target="_blank" rel="noopener noreferrer" className="champion-link">
                                Sé como Katerine <ChevronRight size={16} />
                            </a>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Gloria;
