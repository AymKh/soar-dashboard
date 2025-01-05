export const dynamic = 'force-dynamic'
import { Etheme, TCreditCardProps } from "@/lib/types"
import { NextResponse } from "next/server";

// THIS IS A MOCK FILE
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

export async function GET() {
    return NextResponse.json(cards);
}