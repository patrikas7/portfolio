type SectionHeaderProps = {
    label?: string;
    title?: string;
    description?: string;
};

const SectionHeader = ({ label, title, description }: SectionHeaderProps) => (
    <div className='mb-6'>
        {label && <p className='text-label text-snow-secondary uppercase'>{label}</p>}
        {title && <h2 className='text-section-title text-snow mt-4'>{title}</h2>}
        {description && <p className='text-body text-snow-secondary mb-12 max-w-2xl leading-relaxed mt-6'>{description}</p>}
    </div>
);

export default SectionHeader;
