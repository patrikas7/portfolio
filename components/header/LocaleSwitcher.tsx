'use client';

import useOutsideClick from '@/hooks/useOutsideClick';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { useRef, useState } from 'react';
import { IoChevronDownSharp, IoCheckmark } from 'react-icons/io5';
import { twMerge } from 'tailwind-merge';

const LOCALE_LABELS: Record<string, string> = {
    en: 'English',
    lt: 'Lietuvių',
};

type LocaleSwitcherProps = {
    /** Which side the dropdown opens towards. Use 'left' when the trigger sits
     *  on the left side of its container (e.g. inside the mobile drawer). */
    dropdownSide?: 'left' | 'right';
};

const LocaleSwitcher = ({ dropdownSide = 'right' }: LocaleSwitcherProps) => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useOutsideClick(containerRef, () => setOpen(false));

    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleSelect = (newLocale: string) => {
        setOpen(false);
        if (newLocale === locale) return;
        router.replace({ pathname }, { locale: newLocale });
    };

    return (
        <div ref={containerRef} className='relative'>
            <button
                onClick={() => setOpen(prev => !prev)}
                type='button'
                aria-expanded={open}
                aria-haspopup='listbox'
                className='flex items-center gap-1.5 text-on-dark-secondary hover:text-snow transition-colors duration-200 cursor-pointer text-nav'
            >
                <span className='font-mono tracking-wider'>{locale.toUpperCase()}</span>
                <IoChevronDownSharp
                    size={13}
                    className={twMerge(
                        'transition-transform duration-200',
                        open && 'rotate-180',
                    )}
                />
            </button>

            {open && (
                <div
                    role='listbox'
                    className={twMerge(
                        'absolute top-[calc(100%+10px)] z-50 min-w-[130px] bg-hero-overlay border border-stroke-dark rounded-panel overflow-hidden shadow-lg',
                        dropdownSide === 'right' ? 'right-0' : 'left-0',
                    )}
                >
                    {routing.locales.map(l => {
                        const isActive = l === locale;
                        return (
                            <button
                                key={l}
                                role='option'
                                aria-selected={isActive}
                                type='button'
                                onClick={() => handleSelect(l)}
                                className={twMerge(
                                    'w-full flex items-center justify-between gap-3 px-4 py-2.5 text-nav transition-colors duration-200 hover:bg-hero-secondary cursor-pointer',
                                    isActive ? 'text-accent' : 'text-snow-secondary hover:text-snow',
                                )}
                            >
                                <span>{LOCALE_LABELS[l] ?? l.toUpperCase()}</span>
                                {isActive && <IoCheckmark size={14} className='text-accent flex-shrink-0' />}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default LocaleSwitcher;
