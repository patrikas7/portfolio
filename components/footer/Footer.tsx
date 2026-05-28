import { getLocale } from 'next-intl/server';

const Footer = async () => {
    const locale = await getLocale();
    const currentYear = new Date().getFullYear();

    return (
        <footer className='bg-hero border-t border-thin-dark px-section-x py-6 flex items-center justify-between'>
            <span className='text-small text-snow-tertiary'>© {currentYear} Patrikas Voicechovski</span>
            <span className='text-small text-snow-tertiary'>{locale === 'lt' ? process.env.LOCATION_LT : process.env.LOCATION_EN}</span>
        </footer>
    );
};

export default Footer;
