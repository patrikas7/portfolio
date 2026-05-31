'use client';

import { useEffect, useState } from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';

const ThemeToggle = () => {
    // Dark is the default (no class on <html>).
    // Light mode adds a .light class — so isDark = !classList.contains('light').
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        setIsDark(!document.documentElement.classList.contains('light'));
    }, []);

    const toggle = () => {
        const next = !isDark;
        setIsDark(next);

        if (next) {
            // switching to dark: remove the .light override
            document.documentElement.classList.remove('light');
            localStorage.setItem('theme', 'dark');
        } else {
            // switching to light: add the .light override
            document.documentElement.classList.add('light');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <button
            onClick={toggle}
            type='button'
            suppressHydrationWarning
            className='flex items-center justify-center text-on-dark-secondary hover:text-snow transition-colors cursor-pointer'
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {isDark ? <IoSunny size={20} /> : <IoMoon size={20} />}
        </button>
    );
};

export default ThemeToggle;
