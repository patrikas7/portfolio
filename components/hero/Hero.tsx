'use client';

import { NAVIGATION_LINKS } from '@/constants/urls';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../UI/Button';
import { ANIM_BASE, ANIM_IMAGE, ANIM_STEP, EASE } from './heroConstants';

const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, EASE, delay },
});

const fadeScale = (delay: number) => ({
    initial: { opacity: 0, scale: 0.97 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, EASE, delay },
});

const sectionCls =
    'bg-hero hero-dot-grid min-h-hero px-section-x py-8 sm:py-12 md:py-hero-y flex flex-col md:flex-row items-center justify-center gap-16 sm:gap-12 md:gap-16';

const Hero = () => {
    const t = useTranslations('hero');

    return (
        <section className={sectionCls} aria-labelledby='hero-heading'>
            <div className='md:flex-1 flex flex-col items-center md:items-start text-center md:text-left'>
                <motion.div className='flex items-center gap-2 mb-5 sm:mb-7' {...fadeUp(ANIM_BASE)}>
                    <span aria-hidden='true' className='w-1.5 h-1.5 rounded-full bg-accent animate-pulse shrink-0' />
                    <span className='text-label text-accent uppercase tracking-[0.18em]'>{t('badge')}</span>
                </motion.div>

                <motion.h1
                    id='hero-heading'
                    className='text-3xl sm:text-4xl md:text-hero-name lg:text-5xl xl:text-hero-name text-snow font-semibold mb-3 sm:mb-4 leading-tight'
                    {...fadeUp(ANIM_BASE + ANIM_STEP)}
                >
                    {t('name')}
                </motion.h1>

                <motion.h2
                    className='text-xl sm:text-2xl md:text-hero-role text-accent-muted mb-5 sm:mb-7 font-light leading-tight'
                    {...fadeUp(ANIM_BASE + ANIM_STEP * 2)}
                >
                    {t('role')}
                </motion.h2>

                <motion.p
                    className='text-sm sm:text-base md:text-body text-snow-secondary max-w-xs sm:max-w-sm md:max-w-md leading-relaxed mb-8 sm:mb-10'
                    {...fadeUp(ANIM_BASE + ANIM_STEP * 3)}
                >
                    {t('description')}
                </motion.p>

                <motion.div
                    className='flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 w-full sm:w-auto md:justify-start'
                    {...fadeUp(ANIM_BASE + ANIM_STEP * 4)}
                >
                    <Button href={NAVIGATION_LINKS.contacts} variant='primary' className='w-full sm:w-auto'>
                        {t('ctaPrimary')}
                    </Button>
                    <Button href={NAVIGATION_LINKS.experience} variant='ghost' className='w-full sm:w-auto'>
                        {t('ctaSecondary')}
                    </Button>
                </motion.div>
            </div>

            <motion.div className='relative shrink-0' {...fadeScale(ANIM_IMAGE)}>
                <div className='absolute inset-2 rounded-full bg-accent opacity-10 blur-2xl pointer-events-none' />
                <div className='relative w-56 sm:w-64 md:w-72 lg:w-80 h-56 sm:h-64 md:h-72 lg:h-80 rounded-full border border-accent-dim overflow-hidden'>
                    <Image
                        src='/my_photo.jpg'
                        alt={t('name')}
                        fill
                        className='object-cover rounded-full'
                        priority
                        sizes='(max-width: 640px) 224px, (max-width: 768px) 256px, (max-width: 1024px) 288px, 320px'
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
