'use client';

import { TSidebarNavItems } from '@/lib/types'
import Image from 'next/image'
import React, { JSX } from 'react'
import { House, ArrowLeftRight, UserRound, HandCoins, PiggyBank, CreditCard, PencilRuler, Lightbulb, Settings } from 'lucide-react';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

function SideNav() {

    const navigation: TSidebarNavItems[] = [
        { label: 'dashboard', href: '/' },
        { label: 'transactions', href: '#' },
        { label: 'accounts', href: '#' },
        { label: 'investments', href: '#' },
        { label: 'credit cards', href: '#' },
        { label: 'loans', href: '#' },
        { label: 'services', href: '#' },
        { label: 'my privileges', href: '#' },
        { label: 'settings', href: '/settings' },
    ];

    const iconsMap: Record<string, JSX.Element> = {
        'dashboard': <House size={24} />,
        'transactions': <ArrowLeftRight size={24} />,
        'accounts': <UserRound size={24} />,
        'investments': <PiggyBank size={24} />,
        'credit cards': <CreditCard size={24} />,
        'loans': <HandCoins size={24} />,
        'services': <PencilRuler size={24} />,
        'my privileges': <Lightbulb size={24} />,
        'settings': <Settings size={24} />
    };

    const pathName = usePathname();

    return (
        <div className='hidden lg:block min-w-[var(--sidebar-width)] h-screen bg-secondary-50 border-r border-secondary-200'>

            <div className='h-[var(--topbar-height)] flex items-center justify-center gap-4'>
                <Image src="/logo.png" alt='logo' width={24} height={24} />
                <span className='font-extrabold text-accent-50 text-2xl'>Soar Test</span>
            </div>


            <nav className=''>
                {
                    navigation.map((item: TSidebarNavItems, index: number) => (
                        <Link key={index} href={item.href} className={
                            clsx(
                                'flex items-center gap-4 p-4 text-[#B1B1B1] hover:bg-secondary-100 relative',
                                { 'text-accent-100 activeLink': pathName === item.href }
                            )
                        }>
                            {iconsMap[item.label]}
                            <span className='capitalize text-lg font-medium'>{item.label}</span>
                        </Link>
                    ))
                }
            </nav>
        </div>
    )
}

export default SideNav