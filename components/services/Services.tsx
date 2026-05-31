import { getTranslations } from 'next-intl/server';
import SectionHeader from '../UI/SectionHeader';
import { SERVICES } from './servicesConstants';

const Services = async () => {
    const t = await getTranslations('services');

    return (
        <section id='services' aria-labelledby='services-heading' className='bg-hero px-section-x py-section-y'>
            <SectionHeader label={t('label')} title={t('title')} headingId='services-heading' />

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6'>
                {SERVICES.map(({ icon: Icon, titleKey, descKey, bulletKeys }) => (
                    <div
                        key={titleKey}
                        className='group flex flex-col gap-6 p-7 rounded-card border border-stroke-dark hover:border-accent-dim transition-colors duration-200'
                    >
                        <div className='flex items-center justify-center w-10 h-10 rounded-card bg-accent-ghost border border-accent-dim group-hover:border-accent transition-colors duration-200 shrink-0'>
                            <Icon aria-hidden='true' className='text-accent' size={18} />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <h3 className='text-snow font-semibold text-base leading-tight'>
                                {t(titleKey)}
                            </h3>
                            <p className='text-snow-secondary text-body leading-relaxed'>
                                {t(descKey)}
                            </p>
                        </div>

                        <ul className='flex flex-col gap-2.5 mt-auto pt-2 border-t border-stroke-dark'>
                            {bulletKeys.map(key => (
                                <li key={key} className='flex items-start gap-2.5 text-sm text-snow-secondary'>
                                    <span aria-hidden='true' className='mt-[5px] w-1 h-1 rounded-full bg-accent flex-shrink-0' />
                                    {t(key)}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
