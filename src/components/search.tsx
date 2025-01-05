import React from 'react'
import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'

function SearchBar({ className }: { className: string }) {
    return (
        <div className={
            cn`${className} flex flex-row items-center gap-2 bg-secondary-100 rounded-full p-4`
        }>
            <Search className='text-primary-100' />
            <input type="text" placeholder='Search for something' className='text-primary-100 bg-transparent outline-none placeholder-primary-100 w-full' />
        </div>
    )
}

export default SearchBar