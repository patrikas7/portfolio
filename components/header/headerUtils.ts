import { NAVIGATION_LINKS } from '@/constants/urls';
import { TranslationFn } from '@/types/types';

export const buildHeaderLinks = (t: TranslationFn) => [
    { label: t('aboutMe'), href: NAVIGATION_LINKS.about },
    { label: t('experience'), href: NAVIGATION_LINKS.experience },
    { label: t('technology'), href: NAVIGATION_LINKS.technology },
    { label: t('services'), href: NAVIGATION_LINKS.services },
    { label: t('contacts'), href: NAVIGATION_LINKS.contacts },
];
