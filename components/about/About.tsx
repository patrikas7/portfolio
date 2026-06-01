import { getTranslations } from 'next-intl/server';
import SectionHeader from '../UI/SectionHeader';
import StatsList from './StatsList';

const About = async () => {
    const t = await getTranslations('about');

    return (
        <section id='about' aria-labelledby='about-heading' className='bg-hero-secondary px-section-x py-section-y'>
            <SectionHeader label={t('label')} title={t('title')} headingId='about-heading' />

            <div className='grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start'>
                <div className='lg:col-span-3 flex flex-col gap-5'>
                    <p className='text-body text-snow-secondary leading-relaxed'>
                        {t('paragraph1')}
                    </p>
                    <p className='text-body text-snow-secondary leading-relaxed'>
                        {t('paragraph2')}
                    </p>
                </div>

                <div className='lg:col-span-2'>
                    <StatsList />
                </div>
            </div>
        </section>
    );
};

export default About;
