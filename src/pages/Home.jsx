import Header from '../components/Header';
import Hero from '../components/Hero';
import Classes from '../components/Classes';
import Gloria from '../components/Gloria';
import Eventos from '../components/Eventos';
import Plans from '../components/Plans';
import Footer from '../components/Footer';

function Home() {
    return (
        <div className="home-container">
            <Header />
            <main className="main-content" style={{ width: '100%', overflowX: 'hidden' }}>
                <Hero />
                <Classes />
                <Gloria />
                <Eventos />
                <Plans />
            </main>
            <Footer />
        </div>
    );
}

export default Home;
