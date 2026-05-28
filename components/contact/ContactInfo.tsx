import { useLocale } from 'next-intl';
import { buildContactInfo } from './contactUtils';
import { twMerge } from 'tailwind-merge';

const ContactInfo = () => {
    const locale = useLocale();
    const contactInfo = buildContactInfo(locale);

    return contactInfo.map(({ icon: Icon, text, href }, index) => (
        <div
            key={index}
            className={twMerge(
                'flex items-center border-top-thin-white py-4 gap-4',
                index === contactInfo.length - 1 && 'border-y-thin-white',
            )}
        >
            <Icon className='text-snow-secondary' height={24} width={24} />
            {href ? (
                <a
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-body text-snow-secondary leading-relaxed hover:underline'
                >
                    {text}
                </a>
            ) : (
                <p className='text-body text-snow-secondary leading-relaxed'>{text}</p>
            )}
        </div>
    ));
};

export default ContactInfo;
