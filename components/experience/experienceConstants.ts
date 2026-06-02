import { ExperienceItem } from './experienceTypes';

export const EXPERIENCES: ExperienceItem[] = [
    {
        period: '2026',
        isCurrent: true,
        typeKey: 'fulltime',
        roleKey: 'role_oxylabs',
        company: 'Oxylabs.io',
        tags: ['Next.js', 'TypeScript'],
    },
    {
        period: '2025 – 2026',
        typeKey: 'freelance',
        roleKey: 'role_saas',
        company: 'IT agentūra',
        bulletKeys: ['saas_b1', 'saas_b2', 'saas_b3'],
        tags: ['Next.js', 'Stripe', 'CMS'],
    },
    {
        period: '2024 – 2026',
        typeKey: 'fulltime',
        roleKey: 'role_festo',
        company: 'Festo Lietuva',
        bulletKeys: ['festo_b1', 'festo_b2', 'festo_b3'],
    },
    {
        period: '2024 – 2025',
        typeKey: 'freelance',
        roleKey: 'role_web',
        company: 'Privatus klientas',
        bulletKeys: ['web_b1', 'web_b2'],
        tags: ['Next.js', 'CMS'],
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
