import React, { JSX } from 'react'
import { Button } from './ui/button'
import { Bell, Settings } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { TNavigationItems } from '@/lib/types'
import SearchBar from './search'

function TopNav() {

    const navItems: TNavigationItems[] = [
        {
            label: 'Settings',
            icon: 'Settings',
            href: '/settings',
        },
        {
            label: 'Notifications',
            icon: 'Bell',
            href: '/notifications',
        },
    ]

    /**
     * Used to map the icon name to the actual icon component
     */
    const icons: Record<string, JSX.Element> = {
        Settings: <Settings className='!w-6 !h-6' />,
        Bell: <Bell className="!w-6 !h-6" />,
    }

    return (
        <div className='min-h-[var(--topbar-height)] py-8 px-8 lg:py-0  bg-secondary-50 lg:block flex flex-col gap-8'>
            <div className='flex flex-row items-center justify-between w-full h-full'>
                <span className='capitalize text-primary-300 font-semibold text-2xl'>ROUTE NAME</span>

                <div className='flex flex-row items-center gap-6'>
                    <SearchBar className="hidden lg:flex" />
                    {
                        navItems.map((item, index) => {
                            return (
                                <Button key={index} variant="secondary" size="xl" className='hidden lg:flex lg:items-center lg:justify-center rounded-full bg-secondary-100 text-primary-200'>
                                    {icons[item.icon]}
                                </Button>
                            )
                        })
                    }

                    <Avatar>
                        <AvatarImage src="https://avatars.githubusercontent.com/u/49798649?v=4" />
                        <AvatarFallback>AK</AvatarFallback>
                    </Avatar>
                </div>
            </div>

            <SearchBar className='lg:hidden' />
        </div>
    )
}

export default TopNav