import { twMerge } from 'tailwind-merge';
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
    charCount?: number;
};

const FormField = ({ id, label, placeholder, type = 'text', isTextarea, register, error, maxLength, charCount }: FormFieldProps) => {
    const errorId = `${id}-error`;
    const inputCls = twMerge(
        'px-4 py-3 rounded-input border bg-hero-secondary text-snow placeholder-snow-tertiary focus:outline-none transition-all duration-base w-full',
        error
            ? 'border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500/50'
            : 'border-stroke-dark-hover focus:border-accent focus:ring-1 focus:ring-accent/40',
    );

    return (
        <div className='flex flex-col gap-2'>
            <label htmlFor={id} className='text-label text-snow-tertiary uppercase'>
                {label}
            </label>
            {isTextarea ? (
                <div className='relative'>
                    <textarea
                        id={id}
                        placeholder={placeholder}
                        rows={5}
                        {...register(id)}
                        className={twMerge(inputCls, 'resize-none')}
                        maxLength={maxLength}
                        aria-invalid={!!error}
                        aria-describedby={error ? errorId : undefined}
                    />
                    {maxLength !== undefined && charCount !== undefined && (
                        <span aria-hidden='true' className='absolute bottom-2.5 right-3 text-small text-snow-tertiary pointer-events-none tabular-nums'>
                            {charCount} / {maxLength}
                        </span>
                    )}
                </div>
            ) : (
                <input
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    {...register(id)}
                    className={inputCls}
                    maxLength={maxLength}
                    aria-invalid={!!error}
                    aria-describedby={error ? errorId : undefined}
                />
            )}
            {error && <span id={errorId} role='alert' className='text-small text-red-400'>{error}</span>}
        </div>
    );
};

export default FormField;
