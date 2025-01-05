import React from 'react'

interface SectionContainerProps {
    children: React.ReactNode;
    title: string;
}

function SectionContainer({ children, title }: SectionContainerProps) {
    return (
        <div className='flex flex-col gap-8'>
            <span className='text-primary-300 font-semibold text-xl capitalize'>{title}</span>
            {children}
        </div>
    )
}

export default SectionContainer