import './Eventos.css';

const Eventos = () => {
    return (
        <section id="eventos" className="events-section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="section-badge">Próximas Peleas</span>
                    <h2>Nuestros Guerreros en Acción</h2>
                    <p>Apoya a nuestra sangre en los próximos eventos nacionales e internacionales.</p>
                </div>

                {/* Evento Principal */}
                <div className="main-event">
                    <div className="main-event-image-wrapper">
                        {/* Placeholder para la foto del poster del evento principal */}
                        <img src="https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?auto=format&fit=crop&q=80&w=1200" alt="Cartelera Evento Principal" className="main-event-img" />
                        <div className="main-event-overlay">
                            <span className="live-badge">EVENTO PRINCIPAL</span>
                            <h3>Noche de Campeones Vol. IV</h3>
                            <p className="event-date">15 de Noviembre, 2024</p>
                            <button className="btn-primary mt-15">Conseguir Entradas</button>
                        </div>
                    </div>
                </div>

                {/* Eventos Secundarios (Carrusel o Grid simulando carrusel para no requerir librerias) */}
                <h3 className="section-subtitle">Cartelera Preliminar</h3>

                <div className="events-carousel">
                    {/* Tarjeta 1 */}
                    <article className="event-card">
                        <img src="https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&q=80&w=500" alt="Peleador 1" className="event-card-img" />
                        <div className="event-card-info">
                            <h4>Carlos "El Toro" Silva</h4>
                            <span>vs. Marco Rojas</span>
                            <div className="event-card-footer">
                                <span>Liga FFC Peru</span>
                            </div>
                        </div>
                    </article>

                    {/* Tarjeta 2 */}
                    <article className="event-card">
                        <img src="https://images.unsplash.com/photo-1552089123-2d26226fc2b7?auto=format&fit=crop&q=80&w=500" alt="Peleador 2" className="event-card-img" />
                        <div className="event-card-info">
                            <h4>Lucía "Víbora" Meza</h4>
                            <span>vs. Andrea Ruiz</span>
                            <div className="event-card-footer">
                                <span>Muay Thai Femenino</span>
                            </div>
                        </div>
                    </article>

                    {/* Tarjeta 3 */}
                    <article className="event-card">
                        <img src="https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?auto=format&fit=crop&q=80&w=500" alt="Peleador 3" className="event-card-img" />
                        <div className="event-card-info">
                            <h4>Julio "Martillo" Díaz</h4>
                            <span>vs. Pedro Soto</span>
                            <div className="event-card-footer">
                                <span>Inka FC</span>
                            </div>
                        </div>
                    </article>

                    {/* Tarjeta 4 */}
                    <article className="event-card">
                        <img src="https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?auto=format&fit=crop&q=80&w=500" alt="Peleador 4" className="event-card-img" />
                        <div className="event-card-info">
                            <h4>Diego Vargas</h4>
                            <span>vs. Luis Gomez</span>
                            <div className="event-card-footer">
                                <span>Debut Amateur</span>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Eventos;
