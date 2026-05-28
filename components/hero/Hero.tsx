import { NAVIGATION_LINKS } from '@/constants/urls';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Button from '../UI/Button';

const Hero = async () => {
    const t = await getTranslations('hero');

    return (
        <section className='bg-hero min-h-hero px-section-x py-hero-y flex items-center'>
            <div className='flex-1'>
                <div className='inline-block mb-6 px-4 py-1 rounded-tag border border-thin-dark'>
                    <span className='text-label text-snow-secondary uppercase tracking-widest'>{t('badge')}</span>
                </div>

                <h1 className='text-hero-name text-snow mb-2'>{t('name')}</h1>
                <h2 className='text-hero-role text-snow-secondary'>{t('role')}</h2>

                <p className='text-body text-snow-secondary max-w-md leading-relaxed'>{t('description')}</p>

                <div className='flex items-center gap-4 mt-8'>
                    <Button href={NAVIGATION_LINKS.contacts} className='text-nav'>
                        {t('ctaPrimary')}
                    </Button>
                    <Button href={NAVIGATION_LINKS.experience} className='text-nav'>
                        {t('ctaSecondary')}
                    </Button>
                </div>
            </div>

            <div className='shrink w-72 h-72 border border-thin-dark relative rounded-full'>
                <Image src='/my_photo.jpg' alt='Patrikas Voicechovski' fill className='object-cover rounded-full' />
            </div>
        </section>
    );
};

export default Hero;
