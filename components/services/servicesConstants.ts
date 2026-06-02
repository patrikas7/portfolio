import { FiCode, FiLayers, FiZap, FiSmartphone } from 'react-icons/fi';
import { IconType } from 'react-icons';

type ServiceCard = {
    icon: IconType;
    titleKey: string;
    descKey: string;
};

export const SERVICES: ServiceCard[] = [
    { icon: FiCode,       titleKey: 'card1Title', descKey: 'card1Desc' },
    { icon: FiLayers,     titleKey: 'card2Title', descKey: 'card2Desc' },
    { icon: FiZap,        titleKey: 'card3Title', descKey: 'card3Desc' },
    { icon: FiSmartphone, titleKey: 'card4Title', descKey: 'card4Desc' },
];
