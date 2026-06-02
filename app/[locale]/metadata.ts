import type { Metadata } from 'next';

const SITE_NAME = 'Patrikas Voicechovski';

const titles = {
    en: 'Patrikas Voicechovski — Full-Stack Developer',
    lt: 'Patrikas Voicechovski — Full-Stack Programuotojas',
} as const;

const descriptions = {
    en: 'Full-stack developer for freelance projects. Web applications, SaaS platforms, and custom integrations — built end-to-end from architecture to deployment.',
    lt: 'Full-stack programuotojas, prieinamas freelance projektams. Web programos, SaaS platformos ir integracijos — valdau nuo architektūros iki paleidimo.',
} as const;

const ogLocales = {
    en: 'en_US',
    lt: 'lt_LT',
} as const;

type Locale = keyof typeof titles;

const isLocale = (locale: string): locale is Locale => locale in titles;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const l: Locale = isLocale(locale) ? locale : 'en';

    const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL!;
    const title = titles[l];
    const description = descriptions[l];

    return {
        metadataBase: new URL(BASE_URL),

        title,
        description,

        icons: {
            icon: [
                { url: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
                { url: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' },
            ],
            apple: [{ url: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' }],
            shortcut: '/web-app-manifest-192x192.png',
        },

        openGraph: {
            type: 'website',
            url: `${BASE_URL}/${l}`,
            title,
            description,
            locale: ogLocales[l],
            alternateLocale: l === 'en' ? 'lt_LT' : 'en_US',
            siteName: SITE_NAME,
        },

        twitter: {
            card: 'summary_large_image',
            title,
            description,
        },

        alternates: {
            canonical: `${BASE_URL}/${l}`,
            languages: {
                en: `${BASE_URL}/en`,
                lt: `${BASE_URL}/lt`,
            },
        },
    };
}
