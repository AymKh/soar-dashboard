import { TSectionContainerProps } from '@/lib/types'
import Link from 'next/link'
import React from 'react'


function SectionContainer({ children, title, cta = { label: '', href: '#' } }: TSectionContainerProps) {
    return (
        <div className='flex flex-col gap-4'>
            <div className='w-full flex flex-row items-center justify-between'>
                <span className='text-primary-300 font-semibold text-xl capitalize'>{title}</span>
                {cta.label && <Link className='text-primary-300 text-lg capitalize' href={cta.href}>{cta.label}</Link>}
            </div>
            {children}
        </div>
    )
}

export default SectionContainer