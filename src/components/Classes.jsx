import './Classes.css';

const Classes = () => {
    return (
        <section id="clase" className="classes-section">
            <div className="container">
                <div className="section-header">
                    <h2>Nuestras Clases</h2>
                    <p>Disciplinas diseñadas para forjar tu mente y cuerpo. No importa si eres principiante o avanzado, tenemos tu lugar.</p>
                </div>

                <div className="classes-grid">
                    <article className="class-card">
                        <div className="class-img-wrapper">
                            {/* Placeholder Image using Unsplash */}
                            <img src="https://images.unsplash.com/photo-1599557345229-2be842c11ee4?auto=format&fit=crop&q=80&w=800" alt="Muay Thai" />
                        </div>
                        <div className="class-info">
                            <h3>Muay Thai</h3>
                            <p>El arte de las ocho extremidades. Aprende la técnica más letal de striking tailandés con nuestros campeones.</p>
                            <a href="#unete" className="class-link">Saber más &rarr;</a>
                        </div>
                    </article>

                    <article className="class-card">
                        <div className="class-img-wrapper">
                            {/* Placeholder Image using Unsplash */}
                            <img src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=800" alt="Boxeo Clásico" />
                        </div>
                        <div className="class-info">
                            <h3>Boxeo Clásico</h3>
                            <p>Técnica, resistencia y poder. Domina el cuadrilátero con un entrenamiento enfocado en la velocidad y el movimiento de pies.</p>
                            <a href="#unete" className="class-link">Saber más &rarr;</a>
                        </div>
                    </article>

                    <article className="class-card">
                        <div className="class-img-wrapper">
                            {/* Placeholder Image using Unsplash */}
                            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800" alt="Entrenamiento Funcional" />
                        </div>
                        <div className="class-info">
                            <h3>Acondicionamiento Físico</h3>
                            <p>Lleva tu físico al límite para aguantar cada round. Circuitos intensos y preparación para peleadores reales.</p>
                            <a href="#unete" className="class-link">Saber más &rarr;</a>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Classes;
