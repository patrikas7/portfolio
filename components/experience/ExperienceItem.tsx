import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { ExperienceItemData } from './ExperienceTimeline';

const itemAnimation = (index: number) => ({
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-40px' },
    transition: { duration: 0.4, delay: index * 0.05 },
});

type ExperienceItemPops = {
    item: ExperienceItemData;
    index: number;
};

const ExperienceItem = ({ item, index }: ExperienceItemPops) => (
    <motion.div {...itemAnimation(index)} className='grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-y-3 gap-x-12 lg:gap-x-20 py-8 sm:py-10 border-b border-stroke-dark last:border-b-0'>
        <div className='flex sm:flex-col gap-3 sm:pt-1'>
            <span className='font-mono text-xs text-snow-secondary tracking-wide shrink-0'>{item.period}</span>
            <span
                className={twMerge(
                    'self-start text-[10px] uppercase tracking-widest px-2 py-0.5 border rounded-tag shrink-0',
                    item.isFulltime ? 'border-accent text-accent' : 'border-stroke-dark text-snow-secondary',
                )}
            >
                {item.type}
            </span>
        </div>

        <div>
            <h3 className='text-base sm:text-lg text-snow font-semibold leading-tight mb-1'>{item.role}</h3>
            <p className='text-sm text-accent-muted font-medium mb-5'>{item.company}</p>

            {item.bullets && item.bullets.length > 0 && (
                <ul className='flex flex-col gap-3 mb-5'>
                    {item.bullets.map((bullet, i) => (
                        <li key={i} className='flex items-center gap-3 text-sm text-snow-secondary leading-relaxed '>
                            <span aria-hidden='true' className=' w-1 h-1 rounded-full bg-accent shrink-0' />
                            {bullet}
                        </li>
                    ))}
                </ul>
            )}

            {item.tags && item.tags.length > 0 && (
                <div className='flex flex-wrap gap-2'>
                    {item.tags.map(tag => (
                        <span
                            key={tag}
                            className='px-2.5 py-1 text-[11px] tracking-wide border border-stroke-dark text-snow-secondary rounded-tag'
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    </motion.div>
);

export default ExperienceItem;
