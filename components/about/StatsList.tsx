import { getTranslations } from 'next-intl/server';
import { WHAT_I_BRING } from './aboutConstants';

const StatsList = async () => {
    const t = await getTranslations('about');

    return (
        <div className='flex flex-col'>
            {WHAT_I_BRING.map(item => (
                <div key={item.titleKey} className='flex flex-col gap-2 py-5 border-b border-stroke-dark-hover first:pt-0 last:border-b-0 last:pb-0'>
                    <div className='flex items-center gap-2.5'>
                        <span className='w-1.5 h-1.5 rounded-full bg-accent shrink-0' aria-hidden='true' />
                        <span className='text-snow font-medium text-sm'>{t(item.titleKey)}</span>
                    </div>
                    <p className='text-snow-secondary text-sm leading-relaxed pl-4'>{t(item.descKey)}</p>
                </div>
            ))}
        </div>
    );
};

export default StatsList;
