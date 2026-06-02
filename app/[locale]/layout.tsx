import type { Metadata, Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import '../../globals.css';

import { DM_Sans, DM_Mono } from 'next/font/google';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans', weight: ['400', '500', '600'] });
const dmMono = DM_Mono({ subsets: ['latin'], variable: '--font-mono', weight: ['400'] });

const BASE_URL = 'https://patrikas.dev';

const TITLE = 'Patrikas Voicechovski — Full-Stack Developer';
const DESCRIPTION =
    'Full-stack developer with 4+ years of experience building web applications with React, Next.js and Node.js. Available for freelance projects.';

export const viewport: Viewport = {
    themeColor: '#0a0a0e',
};

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),

    title: TITLE,
    description: DESCRIPTION,

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

    alternates: {
        canonical: BASE_URL,
        languages: {
            en: `${BASE_URL}/en`,
            lt: `${BASE_URL}/lt`,
        },
    },
};

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'lt' }];
}

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;

    return (
        <html lang={locale} className={`${dmSans.variable} ${dmMono.variable} h-full antialiased`} suppressHydrationWarning>
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
