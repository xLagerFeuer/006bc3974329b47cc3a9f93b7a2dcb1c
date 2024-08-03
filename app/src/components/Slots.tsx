import React from 'react';
import '../theme/tailwind.css';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale('ru');

const Slots: React.FC = () => {
    const today = dayjs();
    const days: dayjs.Dayjs[] = [];
    for (let i = 0; i < 28; i++) {
        days.push(today.add(i, 'day'));
    }

    const isToday = (date: dayjs.Dayjs): boolean => date.isSame(today, 'day');

    return (
        <>
            <div>
                <header className="bg-gray-100 flex items-center justify-between px-4">
                    <div className="flex items-center w-full space-x-4 overflow-x-auto bg-transparent font-bold text-indigo-400">
                        {days.map((date, index) => (
                            <div
                                key={index}
                                className={`flex flex-col items-center p-2 rounded-full ${
                                    isToday(date) ? 'bg-white' : ''
                                }`}
                            >
                                <p>{date.format('dd').toUpperCase()}</p>
                                <p
                                    className={`rounded-full py-1.5 px-2 ${
                                        isToday(date)
                                            ? 'bg-indigo-400 text-white'
                                            : ''
                                    }`}
                                >
                                    {date.format('D')}
                                </p>
                            </div>
                        ))}
                    </div>
                </header>
            </div>
        </>
    );
};

export default Slots;