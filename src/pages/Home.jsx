import Header from '../components/Header';

function Home() {
    return (
        <div className="home-container">
            <Header />
            <main className="main-content">
                <h1>Bienvenidos a TRIUMPH FIGHT CENTER</h1>
                <p>Tu academia de artes marciales mixtas, disciplina y respeto.</p>
                <button className="cta-button">Únete ahora</button>
            </main>
        </div>
    );
}

export default Home;
