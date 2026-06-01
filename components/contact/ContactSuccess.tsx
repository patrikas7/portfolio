'use client';

import { useTranslations } from 'next-intl';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import Button from '../UI/Button';

type ContactSuccessProps = {
    onReset: () => void;
};

const ContactSuccess = ({ onReset }: ContactSuccessProps) => {
    const t = useTranslations('contact');

    return (
        <div role='status' aria-live='polite' className='flex flex-col items-center justify-center gap-6 py-10 text-center'>
            <div className='flex items-center justify-center w-16 h-16 rounded-full bg-accent-ghost border border-accent-dim'>
                <IoCheckmarkCircleOutline aria-hidden='true' className='text-accent' size={34} />
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='text-snow text-xl font-semibold'>{t('successTitle')}</h3>
                <p className='text-snow-secondary text-body'>{t('successMessage')}</p>
            </div>
            <Button variant='ghost' onClick={onReset}>
                {t('sendAnother')}
            </Button>
        </div>
    );
};

export default ContactSuccess;
