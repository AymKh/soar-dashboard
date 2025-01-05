/**
 * @fileoverview Types definition for the library.
 */

export type TNavigationItems = {
    label: string;
    icon: string;
    href: string;
}

export type TSidebarNavItems = Omit<TNavigationItems, 'icon'>;