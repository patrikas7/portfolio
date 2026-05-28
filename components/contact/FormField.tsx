import { ContactFormData } from '@/schemas/contact';
import { UseFormRegister } from 'react-hook-form';

type FormFieldProps = {
    id: keyof ContactFormData;
    label: string;
    placeholder: string;
    type?: string;
    isTextarea?: boolean;
    register: UseFormRegister<ContactFormData>;
    error?: string;
    maxLength?: number;
};

const FormField = ({ id, label, placeholder, type = 'text', isTextarea, register, error, maxLength }: FormFieldProps) => {
    const baseInputClasses = `px-4 py-3 rounded-input border bg-hero-secondary text-snow placeholder-snow-tertiary focus:outline-none transition-all duration-base w-full ${
        error ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-thin-dark focus:border-accent focus:ring-1 focus:ring-accent'
    }`;

    return (
        <div className='flex flex-col gap-2'>
            <label htmlFor={id} className='text-label text-snow-tertiary uppercase'>
                {label}
            </label>
            {isTextarea ? (
                <textarea
                    id={id}
                    placeholder={placeholder}
                    rows={5}
                    {...register(id)}
                    className={`${baseInputClasses} resize-none`}
                    maxLength={maxLength}
                />
            ) : (
                <input type={type} id={id} placeholder={placeholder} {...register(id)} className={baseInputClasses} maxLength={maxLength} />
            )}
            {error && <span className='text-small text-red-500'>{error}</span>}
        </div>
    );
};

export default FormField;
