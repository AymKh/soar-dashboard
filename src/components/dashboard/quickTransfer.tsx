'use client';

import React, { useState, useRef } from 'react';
import { Send, ChevronRight, ChevronLeft } from 'lucide-react';
import { TUser } from '@/lib/types';
import Image from 'next/image';

const UserProfile = ({ name, role, selected, onClick }: TUser) => (
    <div
        onClick={onClick}
        className={`flex flex-col items-center space-y-2 cursor-pointer p-2 min-w-[100px] transition-all duration-200 ${selected ? 'opacity-100 scale-105' : 'opacity-70 hover:opacity-90'
            }`}
    >
        <div className={`w-16 h-16 rounded-full overflow-hidden border-2 transition-colors ${selected ? 'border-blue-500' : 'border-transparent'
            }`}>
            <Image
                src="https://avatars.githubusercontent.com/u/49798649"
                alt={name}
                width={64}
                height={64}
                className="w-full h-full object-cover"
            />
        </div>
        <div className="text-center">
            <h3 className="font-medium text-gray-900 text-sm">{name}</h3>
            <p className="text-sm text-blue-500">{role}</p>
        </div>
    </div>
);

const QuickTransfer = () => {
    const [selectedUser, setSelectedUser] = useState(1);
    const [amount, setAmount] = useState('525.50');
    const sliderRef = useRef(null);

    const users = [
        { id: 1, name: 'Livia Bator', role: 'CEO' },
        { id: 2, name: 'Randy Press', role: 'Director' },
        { id: 3, name: 'Workman', role: 'Designer' },
        { id: 4, name: 'Sarah Chen', role: 'Developer' },
        { id: 5, name: 'Mike Ross', role: 'Manager' },
        { id: 6, name: 'Elena Smith', role: 'Designer' },
        { id: 7, name: 'David Park', role: 'Engineer' },
    ];

    const scroll = (direction: string) => {
        if (sliderRef.current) {
            const scrollAmount = 200;

            (sliderRef.current as HTMLDivElement).scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const handleSubmit = () => {
        if (selectedUser) {
            const user = users.find(u => u.id === selectedUser);
            console.log(`Transferring ${amount} to ${user?.name}`);
        }
    };

    return (
        <div className='bg-white p-4 rounded-xl'>
            <div className="mb-6 relative">
                <div
                    className="flex space-x-4 overflow-x-hidden pb-4 scroll-smooth"
                    ref={sliderRef}
                >
                    {users.map((user) => (
                        <UserProfile
                            key={user.id}
                            name={user.name}
                            role={user.role}
                            selected={selectedUser === user.id}
                            onClick={() => setSelectedUser(user.id)}
                        />
                    ))}
                </div>

                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-8 h-8 bg-white shadow-lg rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-50"
                >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>

                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-8 h-8 bg-white shadow-lg rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-50"
                >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
            </div>

            <div className="flex items-center justify-between">
                <span>Write Amount</span>

                <div className="flex flex-row items-center bg-secondary-100 rounded-full h-[50px]">
                    <input
                        type="text"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Write Amount"
                        className="max-w-[200px] h-full text-gray-900 placeholder-gray-500 bg-transparent outline-none p-2 rounded-full"
                        disabled={!selectedUser}
                    />
                    <button
                        onClick={handleSubmit}
                        disabled={!selectedUser}
                        className={`py-2 px-4 rounded-full flex items-center gap-2 h-full transition-colors ${selectedUser
                            ? 'bg-gray-900 text-white hover:bg-gray-800'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            }`}
                    >
                        <span>Send</span>
                        <Send className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div >
    );
};

export default QuickTransfer;