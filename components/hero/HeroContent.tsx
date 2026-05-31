'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../UI/Button';

type HeroContentProps = {
    badge: string;
    name: string;
    role: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    contactHref: string;
    experienceHref: string;
};

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease, delay },
});

const HeroContent = ({
    badge, name, role, description,
    ctaPrimary, ctaSecondary, contactHref, experienceHref,
}: HeroContentProps) => (
    <>
        <div className='md:flex-1 flex flex-col items-center md:items-start text-center md:text-left'>
            <motion.div className='flex items-center gap-2 mb-5 sm:mb-7' {...fadeUp(0.05)}>
                <span aria-hidden='true' className='w-1.5 h-1.5 rounded-full bg-accent animate-pulse shrink-0' />
                <span className='text-label text-accent uppercase tracking-[0.18em]'>{badge}</span>
            </motion.div>

            <motion.h1
                className='text-3xl sm:text-4xl md:text-hero-name lg:text-5xl xl:text-hero-name text-snow font-semibold mb-3 sm:mb-4 leading-tight'
                {...fadeUp(0.12)}
            >
                {name}
            </motion.h1>

            <motion.h2
                className='text-xl sm:text-2xl md:text-hero-role text-accent-muted mb-5 sm:mb-7 font-light leading-tight'
                {...fadeUp(0.19)}
            >
                {role}
            </motion.h2>

            <motion.p
                className='text-sm sm:text-base md:text-body text-snow-secondary max-w-xs sm:max-w-sm md:max-w-md leading-relaxed mb-8 sm:mb-10'
                {...fadeUp(0.26)}
            >
                {description}
            </motion.p>

            <motion.div
                className='flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 w-full sm:w-auto md:justify-start'
                {...fadeUp(0.33)}
            >
                <Button href={contactHref} variant='primary' className='w-full sm:w-auto'>
                    {ctaPrimary}
                </Button>
                <Button href={experienceHref} variant='ghost' className='w-full sm:w-auto'>
                    {ctaSecondary}
                </Button>
            </motion.div>
        </div>

        <motion.div
            className='relative shrink-0'
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease, delay: 0.38 }}
        >
            <div className='absolute inset-2 rounded-full bg-accent opacity-10 blur-2xl pointer-events-none' />
            <div className='relative w-56 sm:w-64 md:w-72 lg:w-80 h-56 sm:h-64 md:h-72 lg:h-80 rounded-full border border-accent-dim overflow-hidden'>
                <Image
                    src='/my_photo.jpg'
                    alt='Patrikas Voicechovski'
                    fill
                    className='object-cover rounded-full'
                    priority
                    sizes='(max-width: 640px) 224px, (max-width: 768px) 256px, (max-width: 1024px) 288px, 320px'
                />
            </div>
            <div aria-label='4+ years of experience' className='absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-hero-secondary border border-stroke-dark-hover rounded-card px-3.5 py-2.5 shadow-xl'>
                <span aria-hidden='true' className='font-mono text-accent text-xl sm:text-2xl font-semibold leading-none block'>4+</span>
                <span aria-hidden='true' className='text-snow-tertiary text-[10px] tracking-wider uppercase block mt-1'>yrs exp.</span>
            </div>
        </motion.div>
    </>
);

export default HeroContent;
