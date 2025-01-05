import React from 'react';
import { CreditCard } from 'lucide-react';
import { Etheme, TCreditCardProps } from '@/lib/types';
import Image from 'next/image';



const CreditCardContainer = ({
    cardNumber,
    holderName,
    validThru,
    balance,
    theme = Etheme.dark
}: TCreditCardProps) => {
    // Format card number with stars and spaces
    const formatCardNumber = (number: string) => {
        const lastFour = number.slice(-4);
        return `${number.slice(0, 4)} **** **** ${lastFour}`;
    };

    // Format balance to currency
    const formatBalance = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    };

    return (
        <div className={`w-full h-[235px] rounded-xl relative flex flex-col gap-2 ${theme === 'dark'
            ? 'bg-gradient-to-br from-[#5B5A6F] to-black text-white'
            : 'bg-white border-secondary-200 text-gray-800'
            }`}>

            <div className="flex justify-between items-center p-4">
                {balance && (
                    <div className="flex flex-col">
                        <span className="text-sm opacity-80">Balance</span>
                        <span className="text-2xl font-semibold">{formatBalance(balance)}</span>
                    </div>
                )}
                <CreditCard
                    className={`${theme === 'dark' ? 'text-white' : 'text-gray-800'} opacity-80`}
                    size={32}
                />
            </div>

            <div className="p-4">
                <div className="flex justify-between items-end">
                    <div className="flex flex-col">
                        <span className="text-xs opacity-80">CARD HOLDER</span>
                        <span className="font-semibold">{holderName}</span>
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="text-xs opacity-80">VALID THRU</span>
                        <span className="font-semibold">{validThru}</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-center justify-between border-t p-4 h-full bg-gradient-to-b from-[#ffffff4a] to-transparent">
                <p className="font-mono text-xl">{formatCardNumber(cardNumber)}</p>
                <Image src={
                    theme === Etheme.dark
                        ? '/icons/master-card.svg'
                        : '/icons/master-card-dark.svg'
                } width={44} height={30} alt='master-card-logo' ></Image>
            </div>
        </div>
    );
};

const CreditCardSection = () => {

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
        }
    ]


    return (
        <div className="grid-cols-credit-cards gap-4 grid overflow-x-scroll scroll-hidden">
            {
                cards.map((card, index) => (
                    <CreditCardContainer
                        key={index}
                        cardNumber={card.cardNumber}
                        holderName={card.holderName}
                        validThru={card.validThru}
                        balance={card.balance}
                        theme={card.theme}
                    />
                ))
            }
        </div>
    );
}

export default CreditCardSection;