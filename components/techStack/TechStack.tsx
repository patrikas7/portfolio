import { getTranslations } from 'next-intl/server';
import SectionHeader from '../UI/SectionHeader';
import TechStackCard from './TechStackCard';
import { STACK_GROUPS } from './techStackConstants';

const TechStack = async () => {
    const t = await getTranslations('techStack');

    return (
        <section id='technology' aria-labelledby='technology-heading' className='bg-hero-secondary px-section-x py-section-y'>
            <SectionHeader label={t('label')} title={t('title')} headingId='technology-heading' />

            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12'>
                {STACK_GROUPS.map(group => (
                    <div key={group.labelKey} className='border-t border-stroke-dark pt-6'>
                        <h3 className='text-label text-snow-tertiary uppercase tracking-[0.12em] mb-7'>
                            {t(group.labelKey)}
                        </h3>
                        <div className='grid grid-cols-3 gap-3'>
                            {group.items.map(item => (
                                <TechStackCard key={item.name} item={item} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
