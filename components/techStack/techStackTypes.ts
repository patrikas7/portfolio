import { IconType } from 'react-icons';

export type StackItem = {
    name: string;
    icon: IconType;
};

export type StackGroup = {
    labelKey: string;
    items: StackItem[];
};
