import About from '@/components/about/About';
import Contact from '@/components/contact/Contact';
import Experience from '@/components/experience/Experience';
import Hero from '@/components/hero/Hero';
import TechStack from '@/components/techStack/TechStack';

export const Home = () => (
    <>
        <Hero />
        <About />
        <Experience />
        <TechStack />
        <Contact />
    </>
);
export default Home;
