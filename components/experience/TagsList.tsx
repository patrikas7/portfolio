type TagsListProps = {
    tags: string[];
};

const TagsList = ({ tags }: TagsListProps) => (
    <div className='flex flex-wrap gap-2 mt-2'>
        {tags.map(tag => (
            <span key={tag} className='px-3 py-1 rounded-tag border border-thin-white text-tag text-snow-secondary'>
                {tag}
            </span>
        ))}
    </div>
);

export default TagsList;
