import { getTranslations } from 'next-intl/server';
import {
    SiContentful,
    SiDotnet,
    SiExpress,
    SiGit,
    SiNextdotjs,
    SiNodedotjs,
    SiReact,
    SiStripe,
    SiSupabase,
    SiTailwindcss,
    SiTypescript,
} from 'react-icons/si';
import { MdTranslate } from 'react-icons/md';
import { IconType } from 'react-icons';
import SectionHeader from '../UI/SectionHeader';

type StackItem = {
    name: string;
    icon: IconType;
};

type StackGroup = {
    labelKey: string;
    items: StackItem[];
};

const stackGroups: StackGroup[] = [
    {
        labelKey: 'frontend',
        items: [
            { name: 'React.js', icon: SiReact },
            { name: 'Next.js', icon: SiNextdotjs },
            { name: 'TypeScript', icon: SiTypescript },
            { name: 'Tailwind CSS', icon: SiTailwindcss },
            { name: 'React Native', icon: SiReact },
        ],
    },
    {
        labelKey: 'backend',
        items: [
            { name: 'Node.js', icon: SiNodedotjs },
            { name: 'Express.js', icon: SiExpress },
            { name: 'Supabase', icon: SiSupabase },
            { name: '.NET Framework', icon: SiDotnet },
        ],
    },
    {
        labelKey: 'tools',
        items: [
            { name: 'Stripe', icon: SiStripe },
            { name: 'Contentful', icon: SiContentful },
            { name: 'i18n', icon: MdTranslate },
            { name: 'Git', icon: SiGit },
        ],
    },
];

const TechStack = async () => {
    const t = await getTranslations('techStack');

    return (
        <section id='technology' aria-labelledby='technology-heading' className='bg-hero-secondary px-section-x py-section-y'>
            <SectionHeader label={t('label')} title={t('title')} headingId='technology-heading' />

            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12'>
                {stackGroups.map(group => (
                    <div key={group.labelKey} className='border-t border-stroke-dark pt-6'>
                        <h3 className='text-label text-snow-tertiary uppercase tracking-[0.12em] mb-7'>
                            {t(group.labelKey)}
                        </h3>

                        <div className='grid grid-cols-3 gap-3'>
                            {group.items.map(item => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={item.name}
                                        className='group flex flex-col items-center gap-2.5 p-3.5 rounded-card border border-transparent hover:border-accent-dim hover:bg-accent-ghost transition-all duration-200 cursor-default'
                                    >
                                        <Icon aria-hidden='true' className='text-[26px] sm:text-[28px] text-snow-secondary group-hover:text-accent-muted transition-colors duration-200' />
                                        <span className='text-[10px] text-center leading-tight tracking-wide text-snow-secondary group-hover:text-snow transition-colors duration-200'>
                                            {item.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
