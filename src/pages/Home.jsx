import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Classes from '../components/Classes';
import Gloria from '../components/Gloria';
import Eventos from '../components/Eventos';
import Profesor from '../components/Profesor';
import Plans from '../components/Plans';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import WhatsAppBtn from '../components/WhatsAppBtn';

function Home() {
    useEffect(() => {
        // Find key elements to apply stagger animations
        const elementsToAnimate = document.querySelectorAll('.class-card, .plan-card, .event-item, .trophy-case, .hall-of-fame, .hero-text-side, .hero-img');

        elementsToAnimate.forEach((el, index) => {
            el.classList.add('animate-reveal');
            // Stagger items naturally
            el.style.transitionDelay = `${(index % 3) * 0.15}s`;
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-reveal-active');
                }
            });
        }, {
            threshold: 0.1, // Trigger when 10% visible
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe elements
        const itemsToObserve = document.querySelectorAll('.animate-reveal');
        itemsToObserve.forEach(el => observer.observe(el));

        return () => {
            itemsToObserve.forEach(el => observer.unobserve(el));
            observer.disconnect();
        };
    }, []);

    return (
        <div className="home-container">
            <Header />
            <main className="main-content" style={{ width: '100%', overflowX: 'hidden' }}>
                <Hero />
                <Banner />
                <Classes />
                <Gloria />
                <Eventos />
                <Profesor />
                <Plans />
            </main>
            <Footer />
            <WhatsAppBtn />
        </div>
    );
}

export default Home;
