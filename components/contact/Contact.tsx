'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';

import { createContactSchema, type ContactFormData } from '@/schemas/contact';
import FormField from './FormField';
import Button from '../UI/Button';
import SectionHeader from '../UI/SectionHeader';
import ContactInfo from './ContactInfo';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Contact = () => {
    const t = useTranslations('contact');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(createContactSchema(t)),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        try {
            // TODO: Add your form submission logic here
            console.log('Form submitted:', data);
            reset();
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id='contacts' className='bg-hero px-section-x py-section-y'>
            <SectionHeader label={t('label')} title={t('title')} description={t('description')} />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                <div className='flex flex-col'>
                    <ContactInfo />
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>
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
                    />

                    <Button onClick={handleSubmit(onSubmit)} disabled={isSubmitting} className='flex items-center justify-center'>
                        {isSubmitting ? <AiOutlineLoading3Quarters className='animate-spin' size={24} /> : t('submitButton')}
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
