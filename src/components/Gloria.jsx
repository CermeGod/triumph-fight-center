import './Gloria.css';
import { Medal, Trophy, Star, Crown } from 'lucide-react';

const Gloria = () => {
    return (
        <section id="gloria" className="trophy-room-section">
            <div className="container">
                <div className="trophy-header text-center">
                    <span className="section-badge">Nuestra Gloria</span>
                    <h2>Sala de Trofeos</h2>
                    <p className="trophy-subtitle">
                        El tatami donde se forjan campeones. Conoce nuestros logros y la sangre derramada por obtener la victoria en el circuito nacional.
                    </p>
                </div>

                <div className="trophy-grid">
                    {/* Trofeo 1 */}
                    <article className="trophy-case">
                        <div className="trophy-icon-wrapper gold">
                            <Trophy size={48} />
                        </div>
                        <div className="trophy-info">
                            <h3>Campeones Nacionales</h3>
                            <span className="trophy-year">2023 - 2024</span>
                            <p>Múltiples medallas de Oro en el torneo oficial de la federación peruana de Muay Thai.</p>
                        </div>
                    </article>

                    {/* Trofeo 2 */}
                    <article className="trophy-case">
                        <div className="trophy-icon-wrapper silver">
                            <Medal size={48} />
                        </div>
                        <div className="trophy-info">
                            <h3>Liga de Boxeo Amateur</h3>
                            <span className="trophy-year">2023</span>
                            <p>Nuestros prospectos arrasaron en la división de pesos ligeros y welter llevándose la medalla de plata.</p>
                        </div>
                    </article>

                    {/* Trofeo 3 */}
                    <article className="trophy-case highlight-case">
                        <div className="trophy-icon-wrapper platinum">
                            <Crown size={48} />
                        </div>
                        <div className="trophy-info">
                            <h3>Mejor Academia Lima Sur</h3>
                            <span className="trophy-year">Actualidad</span>
                            <p>Reconocimiento al mayor nivel de competitividad, disciplina y calidad de instalaciones para deportes de contacto.</p>
                        </div>
                    </article>
                </div>

                <div className="hall-of-fame">
                    <div className="hof-content">
                        <Star size={32} className="hof-star" />
                        <h3>Salón de la Fama</h3>
                        <p>Únete hoy. Quizás mañana, tu foto esté colgando en nuestra pared de campeones.</p>
                        <a href="#unete" className="btn-outline hof-btn">Entrena con nosotros</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gloria;
