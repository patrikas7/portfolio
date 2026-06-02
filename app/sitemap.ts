import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL;

    return [
        {
            url: `${BASE_URL}/en`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
            alternates: {
                languages: {
                    en: `${BASE_URL}/en`,
                    lt: `${BASE_URL}/lt`,
                },
            },
        },
        {
            url: `${BASE_URL}/lt`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
            alternates: {
                languages: {
                    en: `${BASE_URL}/en`,
                    lt: `${BASE_URL}/lt`,
                },
            },
        },
    ];
}
