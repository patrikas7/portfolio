import type { Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import '../../globals.css';

import { DM_Sans, DM_Mono } from 'next/font/google';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { Analytics } from '@vercel/analytics/next';
import { generateMetadata } from './metadata';

export { generateMetadata };

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans', weight: ['400', '500', '600'] });
const dmMono = DM_Mono({ subsets: ['latin'], variable: '--font-mono', weight: ['400'] });

export const viewport: Viewport = {
    themeColor: '#0a0a0e',
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
                    <Analytics />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
