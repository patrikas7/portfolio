import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { buildHeaderLinks } from './headerUtils';
import LocaleSwitcher from './LocaleSwitcher';
import ThemeToggle from './ThemeToggle';
import MobileMenu from './MobileMenu';

const Header = async () => {
    const t = await getTranslations('header');
    const links = buildHeaderLinks(t);

    return (
        <nav aria-label='Main navigation' className='bg-hero backdrop-blur-nav border-b border-stroke-dark h-nav flex items-center justify-between px-section-x sticky top-0 z-40'>
            <span className='font-mono text-accent text-xs tracking-[0.25em] uppercase'>PV</span>

            <div className='hidden md:flex items-center gap-10'>
                {links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        className='text-on-dark-secondary hover:text-snow transition-colors duration-200 text-nav relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-200 hover:after:w-full'
                    >
                        {link.label}
                    </Link>
                ))}
            </div>

            <div className='flex items-center gap-4 md:gap-6'>
                <div className='hidden md:flex items-center gap-4'>
                    <LocaleSwitcher />
                    <ThemeToggle />
                </div>

                <MobileMenu links={links} />
            </div>
        </nav>
    );
};

export default Header;
