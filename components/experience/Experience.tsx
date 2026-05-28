import { getTranslations } from 'next-intl/server';
import BulletList from './BulletList';
import TagsList from './TagsList';
import SectionHeader from '../UI/SectionHeader';

type ExperienceItem = {
    period: string;
    typeKey: string;
    roleKey: string;
    company: string;
    bulletKeys?: string[];
    tags?: string[];
};

const experiences: ExperienceItem[] = [
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

    return (
        <section id='experience' className='bg-hero-secondary px-section-x py-section-y'>
            <SectionHeader label={t('label')} title={t('title')} />
            <div className='flex flex-col'>
                {experiences.map((item, index) => (
                    <div key={index} className='flex gap-40 py-10'>
                        <div>
                            <p className='text-sm text-snow-secondary'>{item.period}</p>
                            <p className='text-sm text-snow-tertiary'>{t(item.typeKey)}</p>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <h3 className='text-body text-snow font-bold'>{t(item.roleKey)}</h3>
                            <p className='text-body text-snow-secondary leading-relaxed'>{item.company}</p>

                            {item.bulletKeys && <BulletList bulletKeys={item.bulletKeys} t={t} />}
                            {item.tags && <TagsList tags={item.tags} />}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
