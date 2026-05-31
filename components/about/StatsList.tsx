import { getTranslations } from 'next-intl/server';
import { STATS } from './aboutConstants';

const StatsList = async () => {
    const t = await getTranslations('about');

    return STATS.map(stat => (
        <div key={stat.labelKey} className='flex flex-col gap-3 border-t border-accent pt-5'>
            <span className='text-3xl sm:text-4xl text-accent font-semibold leading-none tracking-tight'>
                {stat.value}
            </span>
            <span className='text-xs uppercase tracking-[0.12em] text-snow-secondary leading-snug'>
                {t(stat.labelKey)}
            </span>
        </div>
    ));
};

export default StatsList;
