'use client';

import { useLocale, useTranslations } from 'next-intl';
import { buildContactInfo } from './contactUtils';

const ContactInfo = () => {
    const locale = useLocale();
    const t = useTranslations('contact');
    const contactInfo = buildContactInfo(locale);

    return (
        <div className='flex flex-col h-full'>
            <div className='flex items-center gap-2.5 mb-6'>
                <span aria-hidden='true' className='relative flex h-2 w-2 flex-shrink-0'>
                    <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75' />
                    <span className='relative inline-flex rounded-full h-2 w-2 bg-accent' />
                </span>
                <span className='text-label text-accent uppercase tracking-wider'>{t('availability')}</span>
            </div>

            <p className='text-body text-snow-secondary leading-relaxed mb-8'>
                {t('contactIntro')}
            </p>

            <div className='flex flex-col gap-1'>
                {contactInfo.map(({ icon: Icon, text, href }, index) => {
                    const inner = (
                        <>
                            <div className='flex items-center justify-center w-9 h-9 rounded-card bg-accent-ghost border border-accent-dim flex-shrink-0 transition-colors duration-200 group-hover:border-accent'>
                                <Icon aria-hidden='true' className='text-accent' height={16} width={16} />
                            </div>
                            <span className='text-body text-snow-secondary group-hover:text-snow transition-colors duration-200 truncate min-w-0'>
                                {text}
                            </span>
                        </>
                    );

                    const rowClass =
                        'group flex items-center gap-3 px-3 py-3 -mx-3 rounded-card hover:bg-white/5 transition-colors duration-200';

                    return href ? (
                        <a
                            key={index}
                            href={href}
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label={`${text} (${t('opensInNewTab')})`}
                            className={rowClass}
                        >
                            {inner}
                        </a>
                    ) : (
                        <div key={index} className={rowClass}>
                            {inner}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ContactInfo;
