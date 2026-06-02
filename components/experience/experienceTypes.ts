export type ExperienceType = 'fulltime' | 'freelance';

export type ExperienceItem = {
    period: string;
    isCurrent?: boolean;
    typeKey: ExperienceType;
    roleKey: string;
    company: string;
    bulletKeys?: string[];
    tags?: string[];
};
