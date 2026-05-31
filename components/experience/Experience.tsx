import { getTranslations } from 'next-intl/server';
import SectionHeader from '../UI/SectionHeader';
import ExperienceTimeline from './ExperienceTimeline';

type ExperienceEntry = {
    period: string;
    typeKey: string;
    roleKey: string;
    company: string;
    bulletKeys?: string[];
    tags?: string[];
};

const experiences: ExperienceEntry[] = [
    {
        period: '2026 – dabar',
        typeKey: 'fulltime',
        roleKey: 'role_oxylabs',
        company: 'Oxylabs.io',
        tags: ['React', 'TypeScript'],
    },
    {
        period: '2024 – 2026',
        typeKey: 'fulltime',
        roleKey: 'role_festo',
        company: 'Festo Lietuva',
        bulletKeys: ['festo_b1', 'festo_b2', 'festo_b3'],
    },
    {
        period: '2023 – 2024',
        typeKey: 'freelance',
        roleKey: 'role_saas',
        company: 'IT agentūra',
        bulletKeys: ['saas_b1', 'saas_b2', 'saas_b3'],
        tags: ['Next.js', 'Stripe', 'CMS'],
    },
    {
        period: '2023 – 2024',
        typeKey: 'freelance',
        roleKey: 'role_web',
        company: 'Privatus klientas',
        bulletKeys: ['web_b1', 'web_b2'],
        tags: ['Next.js', 'i18n'],
    },
    {
        period: '2023 – 2024',
        typeKey: 'fulltime',
        roleKey: 'role_toughlex',
        company: 'Toughlex',
        bulletKeys: ['toughlex_b1', 'toughlex_b2'],
    },
    {
        period: '2022 – 2023',
        typeKey: 'fulltime',
        roleKey: 'role_festo_junior',
        company: 'Festo Lietuva',
        bulletKeys: ['festo_junior_b1', 'festo_junior_b2'],
    },
];

const Experience = async () => {
    const t = await getTranslations('experience');

    const items = experiences.map(exp => ({
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
