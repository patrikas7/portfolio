import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { buildHeaderLinks } from './headerUtils';

const Header = async () => {
    const t = await getTranslations('header');

    return (
        <nav className='bg-hero backdrop-blur-nav border-b border-stroke-dark h-nav flex items-center justify-between px-section-x'>
            <span className='font-medium text-white'>PV</span>
            <div className='flex items-center gap-8'>
                {buildHeaderLinks(t).map((link, index) => (
                    <Link key={index} href={link.href} className='text-on-dark-secondary hover:text-white transition-colors'>
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Header;
