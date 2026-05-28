import { TranslationFn } from '@/types/types';

type BulletListProps = {
    bulletKeys: string[];
    t: TranslationFn;
};

const BulletList = ({ bulletKeys, t }: BulletListProps) => (
    <ul className='flex flex-col gap-1 mt-1'>
        {bulletKeys.map(key => (
            <li key={key} className='flex items-start gap-3 text-small text-snow-tertiary'>
                <span className='mt-px text-snow-tertiary select-none'>—</span>
                {t(key)}
            </li>
        ))}
    </ul>
);

export default BulletList;
