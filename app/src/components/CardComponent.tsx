import React, { useEffect, useState } from 'react';
import ashan from './assets/company/ashan.png';

/* eslint-disable no-undef */
interface CardProps {
    jobTitle: string;
    location: string;
    distance: string;
    participants: string;
    reward: string;
    endDate: string; // ISO строка конечной даты
}

const CardComponent: React.FC<CardProps> = ({ jobTitle, location, distance, participants, endDate }) => {
    const calculateRemainingTime = (endDate: string) => {
        const end = new Date(endDate).getTime();
        const now = Date.now();
        const remaining = end - now;
        return remaining > 0 ? Math.floor(remaining / 1000) : 0;
    };

    const [remainingTime, setRemainingTime] = useState(calculateRemainingTime(endDate));

    useEffect(() => {
        const timer = setInterval(() => {
            setRemainingTime(calculateRemainingTime(endDate));
        }, 1000);

        return () => clearInterval(timer);
    }, [endDate]);

    const formatTime = (seconds: number) => {
        const days = Math.floor(seconds / (3600 * 24));
        const hours = Math.floor((seconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${days} дн ${hours} ч ${minutes} мин ${secs} сек`;
    };

    return (
        <div className="bg-white rounded-2xl p-4">
            <div className="flex items-center gap-2">
                <div className="w-2/4">
                    <img src={ashan} className={'rounded-xl w-full'} alt="" />
                </div>
                <div>
                    <p className={'text-gray-800 text-sm'}>{jobTitle}</p>
                    <p className={'text-gray-500 text-xs'}>{location}</p>
                </div>
                <div className="w-1/4 flex flex-col space-y-2">
                    <div
                        className={'py-1 px-2 flex items-center justify-center space-x-2 bg-yellow-200 rounded-full font-bold text-center'}>
                        <span className="text-sm">{participants}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="5" height="5" fill="#fff"
                             className="size-6 text-black">
                            <path
                                d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                        </svg>
                    </div>
                    <p className={'text-gray-400 text-end'}>{distance}</p>
                </div>
            </div>

            <hr className={'h-0.1 max-w-sm mx-auto mt-4 my-2 bg-gray-300 rounded-full'} />

            <div className="flex items-center justify-between">
                <div className={'rounded-full ring-2 text-sm ring-indigo-400 text-indigo-400 px-4 py-1'}>
                    Выполнено
                </div>
                <div className="w-full flex flex-col gap-1">
                    <p className={'text-gray-300 text-center text-xs'}>
                        До окончания выполнения осталось:
                    </p>
                    <p className={'text-gray-700 text-center text-sm whitespace-nowrap'}>
                        {formatTime(remainingTime)}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default CardComponent;