import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = {
    onClick?: () => void;
    className?: string;
    children?: ReactNode;
    href?: string;
} & Partial<ButtonHTMLAttributes<HTMLButtonElement>> &
    Partial<AnchorHTMLAttributes<HTMLAnchorElement>>;

const Button = ({ onClick, className, children, href, ...props }: ButtonProps) => {
    const baseStyles =
        'px-7 py-3 rounded-btn border border-thin text-snow-secondary text-nav transition-colors duration-base bg-white text-black disabled:opacity-50 disabled:hover:bg-transparent cursor-pointer hover:bg-transparent hover:text-white';

    const mergedClassName = twMerge(baseStyles, className);

    if (href) {
        return (
            <a href={href} className={mergedClassName} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={mergedClassName} {...props}>
            {children}
        </button>
    );
};

export default Button;
