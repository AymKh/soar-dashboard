import CreditCardContainer from '@/components/dashboard/creditCard'
import { Etheme, TCreditCardProps } from '@/lib/types'
import React from 'react'

async function page() {

    const cards = await fetch('http://localhost:3000/mock/cards');

    if (!cards.ok) throw new Error('Failed to fetch cards');

    const data = await cards.json() as TCreditCardProps[];


    return (
        <div className='p-8'>
            <div className="responsiveGrid">
                {
                    data.map((card, index) => (
                        <CreditCardContainer
                            key={index}
                            {...card}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default page