import CreditCardContainer from '@/components/dashboard/creditCard'
import { Etheme, TCreditCardProps } from '@/lib/types'
import React from 'react'

function page() {

    const cards: TCreditCardProps[] = [
        {
            cardNumber: '1234 5678 1234 5678',
            holderName: 'John Doe',
            validThru: '12/23',
            balance: 1234.56
        },
        {
            cardNumber: '1234 5678 1234 5678',
            holderName: 'John Doe',
            validThru: '12/23',
            balance: 1234.56,
            theme: Etheme.light
        },
        {
            cardNumber: '1234 5678 1234 5678',
            holderName: 'John Doe',
            validThru: '12/23',
            balance: 1234.56
        },
        {
            cardNumber: '1234 5678 1234 5678',
            holderName: 'John Doe',
            validThru: '12/23',
            balance: 1234.56,
            theme: Etheme.light
        },
        {
            cardNumber: '1234 5678 1234 5678',
            holderName: 'John Doe',
            validThru: '12/23',
            balance: 1234.56
        },
        {
            cardNumber: '1234 5678 1234 5678',
            holderName: 'John Doe',
            validThru: '12/23',
            balance: 1234.56,
            theme: Etheme.light
        },
    ]


    return (
        <div className='p-8'>
            <div className="responsiveGrid">
                {
                    cards.map((card, index) => (
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