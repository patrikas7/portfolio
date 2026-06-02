export const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Patrikas Voicechovski',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    jobTitle: 'Full-Stack Developer',
    description:
        'Full-stack developer for freelance projects. Web applications, SaaS platforms, and custom integrations — built end-to-end from architecture to deployment.',
    email: process.env.NEXT_PUBLIC_EMAIL,
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Vilnius',
        addressCountry: 'LT',
    },
    sameAs: [process.env.NEXT_PUBLIC_LINKEDIN, process.env.NEXT_PUBLIC_GITHUB],
    knowsAbout: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Stripe', 'Supabase'],
};
