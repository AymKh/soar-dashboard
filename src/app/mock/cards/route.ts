import { Etheme, TCreditCardProps } from "@/lib/types"


// THIS IS A MOCK FILE
export const cards: TCreditCardProps[] = [
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

export async function GET() {
    return Response.json(cards);
}