import { TranslationFn } from '@/types/types';
import { z } from 'zod';

export const createContactSchema = (t: TranslationFn) =>
    z.object({
        name: z.string().min(2, t('validation.name.min')).max(100, t('validation.name.max')),
        email: z.email(t('validation.email.invalid')),
        message: z.string().min(10, t('validation.message.min')).max(5000, t('validation.message.max')),
    });

export type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>;
