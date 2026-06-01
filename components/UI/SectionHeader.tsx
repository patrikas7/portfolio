type SectionHeaderProps = {
    label: string;
    title: string;
    headingId: string;
    description?: string;
};

const SectionHeader = ({ label, title, headingId, description }: SectionHeaderProps) => (
    <div className='mb-8 sm:mb-10 md:mb-12 lg:mb-16'>
        <div className='flex items-center gap-2.5 mb-2 sm:mb-3'>
            <span className='w-px h-3.5 bg-accent shrink-0 opacity-70' aria-hidden='true' />
            <p className='text-xs sm:text-label text-accent-muted uppercase tracking-wider font-semibold'>
                {label}
            </p>
        </div>
        <h2 id={headingId} className='text-2xl sm:text-3xl md:text-section-title lg:text-5xl text-snow font-semibold mt-2 sm:mt-3 md:mt-4 leading-tight md:leading-normal'>
            {title}
        </h2>
        {description && (
            <p className='text-sm sm:text-base md:text-body text-snow-secondary leading-relaxed md:leading-relaxed mt-4 sm:mt-6 md:mt-8 max-w-2xl'>
                {description}
            </p>
        )}
    </div>
);

export default SectionHeader;
