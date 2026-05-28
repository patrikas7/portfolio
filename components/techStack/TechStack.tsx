import { getTranslations } from 'next-intl/server';
import { twMerge } from 'tailwind-merge';
import SectionHeader from '../UI/SectionHeader';

type StackItem = {
    name: string;
    primary?: boolean;
};

type StackGroup = {
    labelKey: string;
    items: StackItem[];
};

const stackGroups: StackGroup[] = [
    {
        labelKey: 'frontend',
        items: [
            { name: 'React.js', primary: true },
            { name: 'Next.js', primary: true },
            { name: 'TypeScript', primary: true },
            { name: 'Tailwind CSS' },
            { name: 'React Native' },
        ],
    },
    {
        labelKey: 'backend',
        items: [{ name: 'Node.js' }, { name: 'Express.js' }, { name: 'Supabase' }, { name: '.NET Framework' }],
    },
    {
        labelKey: 'tools',
        items: [{ name: 'Stripe' }, { name: 'Headless CMS' }, { name: 'i18n' }, { name: 'Git' }],
    },
];

const TechStack = async () => {
    const t = await getTranslations('techStack');

    return (
        <section id='technology' className='bg-hero-tertiary px-section-x py-section-y'>
            <SectionHeader label={t('label')} title={t('title')} />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {stackGroups.map(group => (
                    <div key={group.labelKey} className='rounded-panel border border-thin-dark p-6 flex flex-col gap-6'>
                        <p className='text-label text-snow-tertiary uppercase'>{t(group.labelKey)}</p>

                        <ul className='flex flex-col'>
                            {group.items.map((item, index) => (
                                <li
                                    key={item.name}
                                    className={twMerge(
                                        'flex items-center gap-3 py-3 text-body font-medium text-snow',
                                        index && 'border-top-thin-dark',
                                    )}
                                >
                                    <span className={`w-2 h-2 rounded-full shrink-0 ${item.primary ? 'bg-accent' : 'bg-ink-muted'}`} />
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
