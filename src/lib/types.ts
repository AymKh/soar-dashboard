/**
 * @fileoverview Types definition for the library.
 */

export type TNavigationItems = {
    label: string;
    icon: string;
    href: string;
}

export type TSidebarNavItems = Omit<TNavigationItems, 'icon'>;

export type TSectionContainerProps = {
    children: React.ReactNode;
    title: string;
    cta: {
        label: string;
        href: string;
    }
}

export enum Etheme {
    light = 'light',
    dark = 'dark'
}

export type TCreditCardProps = {
    cardNumber: string;
    holderName: string;
    validThru: string;
    balance?: number;
    theme?: Etheme;
}

export type TTransactionItem = {
    icon: any;
    title: string;
    date: string;
    amount: number;
    isPositive: boolean;
}

export type TUser = {
    name: string;
    role: string;
    selected: boolean;
    onClick: () => void;
}