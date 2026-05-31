import { NAVIGATION_LINKS } from '@/constants/urls';
import { getTranslations } from 'next-intl/server';
import HeroContent from './HeroContent';

const Hero = async () => {
    const t = await getTranslations('hero');

    return (
        <section className='bg-hero hero-dot-grid min-h-hero px-section-x py-8 sm:py-12 md:py-hero-y flex flex-col md:flex-row items-center justify-center gap-16 sm:gap-12 md:gap-16'>
            <HeroContent
                badge={t('badge')}
                name={t('name')}
                role={t('role')}
                description={t('description')}
                ctaPrimary={t('ctaPrimary')}
                ctaSecondary={t('ctaSecondary')}
                contactHref={NAVIGATION_LINKS.contacts}
                experienceHref={NAVIGATION_LINKS.experience}
            />
        </section>
    );
};

export default Hero;
