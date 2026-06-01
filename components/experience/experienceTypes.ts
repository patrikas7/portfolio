export type ExperienceType = 'fulltime' | 'freelance';

export type ExperienceItem = {
    period: string;
    typeKey: ExperienceType;
    roleKey: string;
    company: string;
    bulletKeys?: string[];
    tags?: string[];
};
