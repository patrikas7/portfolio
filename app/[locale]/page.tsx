import { useTranslations } from 'next-intl';

export default function Home() {
    const t = useTranslations('header');

    console.log(t('aboutMe'));

    return <h1>Test</h1>;
}
