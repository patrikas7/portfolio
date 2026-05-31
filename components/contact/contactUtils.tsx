import { MdOutlineEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import { FiMapPin, FiGithub } from 'react-icons/fi';

export const buildContactInfo = (locale: string) => [
    { icon: MdOutlineEmail, text: process.env.NEXT_PUBLIC_EMAIL || '', href: `mailto:${process.env.NEXT_PUBLIC_EMAIL || ''}` },
    { icon: FaLinkedin, text: process.env.NEXT_PUBLIC_LINKEDIN || '', href: process.env.NEXT_PUBLIC_LINKEDIN || '' },
    { icon: FiGithub, text: process.env.NEXT_PUBLIC_GITHUB || '', href: process.env.NEXT_PUBLIC_GITHUB || '' },
    { icon: FiMapPin, text: process.env[`NEXT_PUBLIC_LOCATION_${locale.toUpperCase()}`] || process.env.NEXT_PUBLIC_LOCATION_EN },
];
