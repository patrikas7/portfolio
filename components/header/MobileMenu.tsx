'use client';

import { useState } from 'react';
import Link from 'next/link';
import { IoMenu, IoClose } from 'react-icons/io5';
import LocaleSwitcher from './LocaleSwitcher';
import ThemeToggle from './ThemeToggle';
import useOutsideClick from '@/hooks/useOutsideClick';
import { useRef } from 'react';

interface NavLink {
    label: string;
    href: string;
}

interface MobileMenuProps {
    links: NavLink[];
}

const MobileMenu = ({ links }: MobileMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useOutsideClick(menuRef, () => setIsOpen(false));

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <div ref={menuRef} className='md:hidden'>
            {/* Hamburger Button */}
            <button
                onClick={() => setIsOpen(prev => !prev)}
                type='button'
                className='flex items-center justify-center text-on-dark-secondary hover:text-snow transition-colors cursor-pointer p-1'
                aria-label='Toggle menu'
                aria-expanded={isOpen}
            >
                {isOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
            </button>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className='absolute top-full right-0 left-0 bg-hero border-b border-stroke-dark shadow-lg animate-in fade-in slide-in-from-top-1 duration-200'>
                    <div className='px-section-x py-4 flex flex-col gap-4'>
                        {/* Navigation Links */}
                        <div className='flex flex-col gap-3 border-b border-stroke-dark pb-4'>
                            {links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className='text-on-dark-secondary hover:text-snow transition-colors text-nav py-2'
                                    onClick={handleLinkClick}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Controls */}
                        <div className='flex items-center justify-between gap-4'>
                            <LocaleSwitcher dropdownSide='left' />
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;
