import './Eventos.css';
import { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import imgEstelar from '../assets/evento-pelea-estelar.jpeg';
import imgEntrada from '../assets/evento-separada-entrada-peru.jpeg';
const Eventos = () => {
    const [modalImage, setModalImage] = useState(null);
    const eventsGridRef = useRef(null);
    const chillGridRef = useRef(null);

    const openModal = (imgSrc) => setModalImage(imgSrc);
    const closeModal = () => setModalImage(null);

    const scrollGrid = (ref, dir) => {
        if (!ref.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = ref.current;
        const scrollAmount = 350;

        if (dir === 'left') {
            if (scrollLeft <= 0) {
                ref.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
            } else {
                ref.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }
        } else {
            if (scrollLeft + clientWidth >= scrollWidth - 10) {
                ref.current.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section id="eventos" className="events-section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="section-badge">Próximos Eventos</span>
                    <h2>Nuestros Guerreros en Acción</h2>
                    <p>Apoya a nuestra sangre en los próximos eventos nacionales e internacionales.</p>
                </div>

                {/* MAIN EVENT 
                <div className="main-event-card" style={{ marginBottom: '40px' }}>
                    <div className="event-item main-event-style">
                        <img
                            src="https://images.unsplash.com/photo-1599557345229-2be842c11ee4?auto=format&fit=crop&q=80&w=1200"
                            alt="Evento Principal"
                            className="event-img cursor-zoom"
                            onClick={() => openModal("https://images.unsplash.com/photo-1599557345229-2be842c11ee4?auto=format&fit=crop&q=80&w=1200")}
                        />
                        <div className="event-desc text-center">
                            <h3><span style={{ color: 'var(--primary)', fontSize: '14px', textTransform: 'uppercase', display: 'block', marginBottom: '5px' }}>Evento de la Semana</span> Título del Evento Principal</h3>
                            <ul className="event-details-list">
                                <li><strong>Pelea:</strong> Nombre de nuestro peleador vs Contrincante</li>
                                <li><strong>Fecha:</strong> XX de Mes, 202X</li>
                                <li><strong>Lugar:</strong> Ubicación o Estadio</li>
                            </ul>
                            <a href="#" className="btn-primary" style={{ marginTop: '15px' }}>Comprar Entradas Aquí</a>
                        </div>
                    </div>
                </div>
                */}

                {/* OTHER EVENTS GRID */}
                <div className="carousel-controls mobile-only">
                    <button onClick={() => scrollGrid(eventsGridRef, 'left')} aria-label="Anterior"><ArrowLeft size={32} /></button>
                    <button onClick={() => scrollGrid(eventsGridRef, 'right')} aria-label="Siguiente"><ArrowRight size={32} /></button>
                </div>
                <div className="events-grid" ref={eventsGridRef}>
                    <article className="event-item">
                        <img
                            src={imgEstelar}
                            alt="O.Medrano VS J.Muñante"
                            className="event-img cursor-zoom"
                            onClick={() => openModal(imgEstelar)}
                        />
                        <div className="event-desc text-center">
                            <h3>O.Medrano VS J.Muñante</h3>
                            <ul className="event-details-list">
                                <li><strong>Categoria:</strong> Muay Thai PRO - Peso Superligero</li>
                                <li><strong>Fecha y Hora:</strong> Sabado, 06 de Diciembre - 1:00 PM</li>
                                <li><strong>Lugar:</strong> TRUCK PARK. Portocarrero 344, Surquillo.</li>
                            </ul>
                            <a href="#" className="btn-outline" style={{ marginTop: '15px' }}>Comprar Entradas Aquí</a>
                        </div>
                    </article>

                    <article className="event-item">
                        <img
                            src="src/assets/pelea-evento-A.Armas vs K.Vargas.jpg"
                            alt="Separada Entrada"
                            className="event-img cursor-zoom"
                            onClick={() => openModal("src/assets/pelea-evento-A.Armas vs K.Vargas.jpg")}
                        />
                        <div className="event-desc text-center">
                            <h3>A.Armas VS K.Vargas</h3>
                            <ul className="event-details-list">
                                <li><strong>Categoria:</strong> Muay Thai PRO - Peso Atrapado</li>
                                <li><strong>Fecha y Hora:</strong> Sabado, 06 de Diciembre - 1:00 PM</li>
                                <li><strong>Lugar:</strong> TRUCK PARK. Portocarrero 344, Surquillo.</li>
                            </ul>
                            <a href="#" className="btn-outline" style={{ marginTop: '15px' }}>Comprar Entradas Aquí</a>
                        </div>
                    </article>
                    <article className="event-item">
                        <img
                            src="src/assets/Pelea-E.LIVIA VS H.MIUAGSUKI.png"
                            alt="Plantilla Evento"
                            className="event-img cursor-zoom"
                            onClick={() => openModal("src/assets/Pelea-E.LIVIA VS H.MIUAGSUKI.png")}
                        />
                        <div className="event-desc text-center">
                            <h3>E.Livia VS H.Miyagusuku</h3>
                            <ul className="event-details-list">
                                <li><strong>Categoria:</strong> Muay Thai PRO - Peso Ligero</li>
                                <li><strong>Fecha y Hora:</strong> Sabado, 23 de Agosto - 3:00 PM</li>
                                <li><strong>Lugar:</strong> TRUCK PARK. Portocarrero 344, Surquillo.</li>
                            </ul>
                            <a href="#" className="btn-outline" style={{ marginTop: '15px' }}>Comprar Entradas Aquí</a>
                        </div>
                    </article>
                </div>

                <div className="section-header text-center" style={{ marginTop: '80px' }}>
                    <span className="section-badge">Comunidad</span>
                    <h2>Eventos de nuestra Familia</h2>
                    <p>En Triumph también somos familia. Únete a nuestras actividades fuera del ring.</p>
                </div>

                <div className="carousel-controls mobile-only">
                    <button onClick={() => scrollGrid(chillGridRef, 'left')} aria-label="Anterior"><ArrowLeft size={32} /></button>
                    <button onClick={() => scrollGrid(chillGridRef, 'right')} aria-label="Siguiente"><ArrowRight size={32} /></button>
                </div>
                <div className="events-grid" ref={chillGridRef}>
                    <article className="event-item confort-item">
                        <img
                            src="src/assets/invitacion a los estudiantes a cafe - colaboracion.jpeg"
                            alt="Cafetería"
                            className="event-img cursor-zoom"
                            onClick={() => openModal("src/assets/invitacion a los estudiantes a cafe - colaboracion.jpeg")}
                        />
                        <div className="event-desc">
                            <h3>Invitación: Café de Campeones</h3>
                            <p>Desayuno especial de integración. La cafetería nos invita para compartir entre alumnos e instructores.</p>
                        </div>
                    </article>

                    <article className="event-item confort-item">
                        <img
                            src="src/assets/noche de pelis.jpg"
                            alt="Noche UFC"
                            className="event-img cursor-zoom"
                            onClick={() => openModal("src/assets/noche de pelis.jpg")}
                        />
                        <div className="event-desc">
                            <h3>Noche de Películas & UFC</h3>
                            <p>Nos reunimos en casa para ver la cartelera principal de UFC y analizar a los mejores del mundo juntos.</p>
                        </div>
                    </article>
                </div>
            </div>

            {/* Modal for full image view */}
            {modalImage && (
                <div className="image-lightbox" onClick={closeModal} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.85)', zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="lightbox-content" style={{ position: 'relative', maxWidth: '90%', maxHeight: '90%' }}>
                        <img src={modalImage} alt="Evento Ampliado" style={{ maxWidth: '100%', maxHeight: '90vh', borderRadius: '15px', objectFit: 'contain' }} />
                        <button className="close-lightbox" onClick={closeModal} style={{ position: 'absolute', top: '-40px', right: '0px', background: 'none', border: 'none', color: 'white', fontSize: '40px', cursor: 'pointer' }}>&times;</button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Eventos;
