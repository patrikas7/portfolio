import { getTranslations } from 'next-intl/server';
import SectionHeader from '../UI/SectionHeader';

const stats = [
    { value: '4+', labelKey: 'stat1' },
    { value: '2', labelKey: 'stat2' },
    { value: '30h', labelKey: 'stat3' },
    { value: 'SaaS', labelKey: 'stat4' },
];

const About = async () => {
    const t = await getTranslations('about');

    return (
        <section id='about' className='bg-hero-tertiary px-section-x py-section-y'>
            <SectionHeader label={t('label')} title={t('title')} />

            <div className='flex flex-col md:flex-row gap-16 items-start'>
                <div className='flex-1 flex flex-col gap-6'>
                    <p className='text-body text-snow-secondary leading-relaxed'>{t('paragraph1')}</p>
                    <p className='text-body text-snow-secondary leading-relaxed'>{t('paragraph2')}</p>
                </div>

                <div className='flex-1 grid grid-cols-2 gap-4'>
                    {stats.map(stat => (
                        <div
                            key={stat.labelKey}
                            className='bg-hero-tertiary rounded-panel border border-thin-white p-6 flex flex-col gap-2'
                        >
                            <span className='text-hero-name text-snow'>{stat.value}</span>
                            <span className='text-small text-snow-secondary leading-snug'>{t(stat.labelKey)}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
