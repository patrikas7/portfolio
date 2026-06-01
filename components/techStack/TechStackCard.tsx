import { StackItem } from './techStackTypes';

const TechStackCard = ({ item }: { item: StackItem }) => {
    const Icon = item.icon;

    return (
        <div className='group flex flex-col items-center gap-2.5 p-3.5 rounded-card border border-transparent hover:border-accent-dim hover:bg-accent-ghost transition-all duration-200 cursor-default'>
            <Icon
                aria-hidden='true'
                className='text-[26px] sm:text-[28px] text-snow-secondary group-hover:text-accent-muted transition-colors duration-200'
            />
            <span className='text-[10px] text-center leading-tight tracking-wide text-snow-secondary group-hover:text-snow transition-colors duration-200'>
                {item.name}
            </span>
        </div>
    );
};

export default TechStackCard;
