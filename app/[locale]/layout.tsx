import type { Metadata, Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import '../../globals.css';

import { DM_Sans, DM_Mono } from 'next/font/google';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans', weight: ['400', '500', '600'] });
const dmMono = DM_Mono({ subsets: ['latin'], variable: '--font-mono', weight: ['400'] });

// Update this to your real domain before deploying
const BASE_URL = 'https://patrikas.dev';

const TITLE       = 'Patrikas Voicechovski — Full-Stack Developer';
const DESCRIPTION = '4+ years building modern web applications with React, Next.js and Node.js. Open to freelance projects and full-time opportunities.';

export const viewport: Viewport = {
    // Colours the browser chrome / address bar on mobile
    themeColor: '#0a0a0e',
};

export const metadata: Metadata = {
    // Absolute base for any relative URLs in OG/twitter image fields
    metadataBase: new URL(BASE_URL),

    title: TITLE,
    description: DESCRIPTION,

    icons: {
        // Standard browser favicon (PNG fallback — works in all modern browsers)
        icon: [
            { url: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
            { url: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' },
        ],
        // iOS home screen icon
        apple: [
            { url: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' },
        ],
        // Legacy shortcut icon
        shortcut: '/web-app-manifest-192x192.png',
    },

    openGraph: {
        type: 'website',
        url: BASE_URL,
        title: TITLE,
        description: DESCRIPTION,
        locale: 'en_US',
        alternateLocale: 'lt_LT',
        siteName: 'Patrikas Voicechovski',
        images: [
            {
                url: '/web-app-manifest-512x512.png',
                width: 512,
                height: 512,
                alt: 'Patrikas Voicechovski — Full-Stack Developer',
            },
        ],
    },

    twitter: {
        card: 'summary',
        title: TITLE,
        description: DESCRIPTION,
        images: ['/web-app-manifest-512x512.png'],
    },

    // Canonical + locale alternates for SEO
    alternates: {
        canonical: BASE_URL,
        languages: {
            'en': `${BASE_URL}/en`,
            'lt': `${BASE_URL}/lt`,
        },
    },

    // Prevent search engines from following external links out of the page
    robots: {
        index: true,
        follow: true,
    },
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const locale = await getLocale();

    return (
        <html lang={locale} className={`${dmSans.variable} ${dmMono.variable} h-full antialiased`} suppressHydrationWarning>
            {/* Blocking script — runs before first paint, prevents flash of wrong theme */}
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.add('light')}}catch(e){}})();`,
                    }}
                />
            </head>
            <body className='min-h-full flex flex-col max-w-[1920px] mx-auto w-full'>
                <NextIntlClientProvider>
                    <Header />
                    <main id='main-content'>{children}</main>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
