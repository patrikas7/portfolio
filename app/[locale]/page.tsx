import About from '@/components/about/About';
import Contact from '@/components/contact/Contact';
import Experience from '@/components/experience/Experience';
import Hero from '@/components/hero/Hero';
import Services from '@/components/services/Services';
import TechStack from '@/components/techStack/TechStack';
import { personJsonLd } from './jsonLd';

export default function Home() {
    return (
        <>
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c'),
                }}
            />
            <Hero />
            <About />
            <Experience />
            <TechStack />
            <Services />
            <Contact />
        </>
    );
}
