import React from 'react';
import { CreditCard, Wallet, DollarSign } from 'lucide-react';
import { TTransactionItem } from '@/lib/types';

const TransactionItem = ({ icon: Icon, title, date, amount, isPositive }: TTransactionItem) => (
    <div className="flex items-center space-x-4 py-3">
        <div className={`p-3 rounded-full ${Icon === CreditCard ? 'bg-yellow-100' : Icon === Wallet ? 'bg-blue-100' : 'bg-cyan-100'}`}>
            <Icon className={`w-6 h-6 ${Icon === CreditCard ? 'text-yellow-600' : Icon === Wallet ? 'text-blue-600' : 'text-cyan-600'}`} />
        </div>
        <div className="flex-1">
            <h3 className=" text-accent-50 font-medium text-base">{title}</h3>
            <p className="text-sm text-primary-200">{date}</p>
        </div>
        <span className={`font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? '+' : '-'}${Math.abs(amount).toLocaleString()}
        </span>
    </div>
);

const RecentTransactions = () => {
    const transactions = [
        {
            icon: CreditCard,
            title: "Deposit from my Card",
            date: "28 January 2021",
            amount: -850,
            isPositive: false
        },
        {
            icon: Wallet,
            title: "Deposit Paypal",
            date: "25 January 2021",
            amount: 2500,
            isPositive: true
        },
        {
            icon: DollarSign,
            title: "Jemi Wilson",
            date: "21 January 2021",
            amount: 5400,
            isPositive: true
        }
    ];

    return (
        <div className="flex flex-col gap-2 overflow-y-scroll scroll-hidden bg-white p-4 rounded-3xl">
            {transactions.map((transaction, index) => (
                <TransactionItem
                    key={index}
                    icon={transaction.icon}
                    title={transaction.title}
                    date={transaction.date}
                    amount={transaction.amount}
                    isPositive={transaction.isPositive}
                />
            ))}
        </div>
    );
};

export default RecentTransactions;