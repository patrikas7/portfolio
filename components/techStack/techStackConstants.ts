import {
    SiDotnet,
    SiExpress,
    SiFigma,
    SiGit,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiPrismic,
    SiReact,
    SiStripe,
    SiSupabase,
    SiTailwindcss,
    SiTypescript,
} from 'react-icons/si';
import { MdTranslate } from 'react-icons/md';
import { StackGroup } from './techStackTypes';

export const STACK_GROUPS: StackGroup[] = [
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
            { name: 'PostgreSQL', icon: SiPostgresql },
            { name: '.NET Framework', icon: SiDotnet },
        ],
    },
    {
        labelKey: 'tools',
        items: [
            { name: 'Stripe', icon: SiStripe },
            { name: 'Prismic', icon: SiPrismic },
            { name: 'Figma', icon: SiFigma },
            { name: 'i18n', icon: MdTranslate },
            { name: 'Git', icon: SiGit },
        ],
    },
];
