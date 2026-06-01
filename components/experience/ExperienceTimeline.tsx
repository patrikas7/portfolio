'use client';

import ExperienceItem from './ExperienceItem';

export type ExperienceItemData = {
    period: string;
    type: string;
    role: string;
    company: string;
    bullets?: string[];
    tags?: string[];
    isFulltime: boolean;
};

const ExperienceTimeline = ({ items }: { items: ExperienceItemData[] }) => (
    <div className='flex flex-col divide-y divide-stroke-dark'>
        {items.map((item, index) => (
            <ExperienceItem key={index} item={item} index={index} />
        ))}
    </div>
);

export default ExperienceTimeline;
