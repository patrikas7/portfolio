import { FiMonitor, FiLayers, FiLayout, FiSmartphone } from 'react-icons/fi';
import { IconType } from 'react-icons';

type ServiceCard = {
    icon: IconType;
    titleKey: string;
    descKey: string;
    bulletKeys: [string, string, string];
};

export const SERVICES: ServiceCard[] = [
    {
        icon: FiMonitor,
        titleKey: 'card1Title',
        descKey: 'card1Desc',
        bulletKeys: ['card1_b1', 'card1_b2', 'card1_b3'],
    },
    {
        icon: FiLayers,
        titleKey: 'card2Title',
        descKey: 'card2Desc',
        bulletKeys: ['card2_b1', 'card2_b2', 'card2_b3'],
    },
    {
        icon: FiLayout,
        titleKey: 'card3Title',
        descKey: 'card3Desc',
        bulletKeys: ['card3_b1', 'card3_b2', 'card3_b3'],
    },
    {
        icon: FiSmartphone,
        titleKey: 'card4Title',
        descKey: 'card4Desc',
        bulletKeys: ['card4_b1', 'card4_b2', 'card4_b3'],
    },
];
