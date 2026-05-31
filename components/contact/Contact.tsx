'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { createContactSchema, type ContactFormData } from '@/schemas/contact';
import FormField from './FormField';
import Button from '../UI/Button';
import SectionHeader from '../UI/SectionHeader';
import ContactInfo from './ContactInfo';

type SubmitState = 'idle' | 'success' | 'error';

const Contact = () => {
    const t = useTranslations('contact');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitState, setSubmitState] = useState<SubmitState>('idle');

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
    } = useForm<ContactFormData>({
        resolver: zodResolver(createContactSchema(t)),
    });

    const messageLength = watch('message')?.length ?? 0;

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (!res.ok) throw new Error('Request failed');
            reset();
            setSubmitState('success');
        } catch {
            setSubmitState('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id='contacts'
            aria-labelledby='contacts-heading'
            className='px-section-x py-section-y'
            style={{
                background:
                    'radial-gradient(ellipse 80% 60% at 72% 50%, var(--color-contact-gradient) 0%, transparent 70%), var(--color-hero)',
            }}
        >
            <SectionHeader label={t('label')} title={t('title')} description={t('description')} headingId='contacts-heading' />

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20'>
                <div className='flex flex-col'>
                    <ContactInfo />
                </div>

                {submitState === 'success' ? (
                    <div role='status' aria-live='polite' className='flex flex-col items-center justify-center gap-6 py-10 text-center'>
                        <div className='flex items-center justify-center w-16 h-16 rounded-full bg-accent-ghost border border-accent-dim'>
                            <IoCheckmarkCircleOutline aria-hidden='true' className='text-accent' size={34} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h3 className='text-snow text-xl font-semibold'>{t('successTitle')}</h3>
                            <p className='text-snow-secondary text-body'>{t('successMessage')}</p>
                        </div>
                        <Button variant='ghost' onClick={() => setSubmitState('idle')}>
                            {t('sendAnother')}
                        </Button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6' noValidate>
                        <FormField
                            id='name'
                            label={t('formName')}
                            placeholder={t('namePlaceholder')}
                            register={register}
                            error={errors.name?.message}
                            maxLength={100}
                        />

                        <FormField
                            id='email'
                            type='email'
                            label={t('formEmail')}
                            placeholder={t('emailPlaceholder')}
                            register={register}
                            error={errors.email?.message}
                        />

                        <FormField
                            id='message'
                            isTextarea
                            label={t('formMessage')}
                            placeholder={t('messagePlaceholder')}
                            register={register}
                            error={errors.message?.message}
                            maxLength={5000}
                            charCount={messageLength}
                        />

                        {submitState === 'error' && (
                            <p role='alert' className='text-small text-red-400'>{t('errorMessage')}</p>
                        )}

                        <Button
                            type='submit'
                            disabled={isSubmitting}
                            aria-label={isSubmitting ? t('submitting') : undefined}
                            className='flex items-center justify-center w-full'
                        >
                            {isSubmitting ? <AiOutlineLoading3Quarters aria-hidden='true' className='animate-spin' size={20} /> : t('submitButton')}
                        </Button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default Contact;
