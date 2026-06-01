import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'ghost';

type ButtonProps = {
    onClick?: () => void;
    className?: string;
    children?: ReactNode;
    href?: string;
    variant?: ButtonVariant;
} & Partial<ButtonHTMLAttributes<HTMLButtonElement>> &
    Partial<AnchorHTMLAttributes<HTMLAnchorElement>>;

const variantStyles: Record<ButtonVariant, string> = {
    primary:
        'bg-accent border-accent text-white hover:bg-accent-subtle hover:border-accent-subtle',
    ghost:
        'bg-transparent border-accent-dim text-accent hover:bg-accent-ghost hover:border-accent',
};

const Button = ({ onClick, className, children, href, variant = 'primary', ...props }: ButtonProps) => {
    const baseStyles =
        'px-6 sm:px-7 py-2.5 sm:py-3 rounded-btn border text-nav transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer font-medium tracking-wide';

    const mergedClassName = twMerge(baseStyles, variantStyles[variant], className);

    if (href) {
        return (
            <Link href={href} className={mergedClassName} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={mergedClassName} {...props}>
            {children}
        </button>
    );
};

export default Button;
