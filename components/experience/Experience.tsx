import { getTranslations } from 'next-intl/server';
import SectionHeader from '../UI/SectionHeader';
import ExperienceTimeline from './ExperienceTimeline';
import { EXPERIENCES } from './experienceConstants';

const Experience = async () => {
    const t = await getTranslations('experience');

    const items = EXPERIENCES.map(exp => ({
        period: exp.period,
        type: t(exp.typeKey),
        role: t(exp.roleKey),
        company: exp.company,
        bullets: exp.bulletKeys?.map(k => t(k)),
        tags: exp.tags,
        isFulltime: exp.typeKey === 'fulltime',
    }));

    return (
        <section id='experience' aria-labelledby='experience-heading' className='bg-hero px-section-x py-section-y'>
            <SectionHeader label={t('label')} title={t('title')} headingId='experience-heading' />
            <ExperienceTimeline items={items} />
        </section>
    );
};

export default Experience;
