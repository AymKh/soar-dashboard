import CreditCardContainer from '@/components/dashboard/creditCard'
import { TCreditCardProps } from '@/lib/types'
import React from 'react'

export const dynamic = 'force-dynamic';

async function page() {

    const cards = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/mock/cards`);

    if (!cards.ok) throw new Error('Failed to fetch cards');

    const data = await cards.json();


    return (
        <div className='p-8'>
            <div className="responsiveGrid">
                {
                    data.map((card: Partial<TCreditCardProps>, index: number) => (
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