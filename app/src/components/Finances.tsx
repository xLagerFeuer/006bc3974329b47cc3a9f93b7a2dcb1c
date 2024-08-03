import React, { useState } from 'react';

export const Finances = () => {
    const [timeType, setTimeType] = useState<'day' | 'hour'>('day');
    const [activeDay, setActiveDay] = useState<number>(6);

    const data = [
        { date: '22', day: 'ПН', value: 2500 },
        { date: '23', day: 'ВТ', value: 1000 },
        { date: '24', day: 'СР', value: 1500 },
        { date: '25', day: 'ЧТ', value: 800 },
        { date: '26', day: 'ПТ', value: 3200 },
        { date: '27', day: 'СБ', value: 1200 },
        { date: '28', day: 'ВС', value: 2200 },
    ];

    return (
        <div
            className="bg-[#E4ECFF] mt-4 pt-1 pb-8 px-6 rounded-lg shadow-md rounded-tr-3xl rounded-tl-3xl flex-auto min-h-[440px]">
            <h2 className="text-xl text-black  mb-4">Финансы</h2>
            <div className="bg-white flex flex-col gap-2 justify-between py-2 px-6 rounded-xl shadow-sm mb-4">
                <div className="flex justify-between items-center">
                    <h3 className="text-xs text-black font-medium">Доходы за неделю</h3>
                    <div className="flex text-black text-xs font-light justify-between gap-4">
                        <span
                            onClick={() => {
                                setTimeType('day');
                            }}
                            className={`text-indigo-700 font-normal cursor-pointer ${timeType === 'day' ? 'opacity-100' : 'opacity-50'}`}
                        >День</span>
                        <span
                            onClick={() => {
                                setTimeType('hour');
                            }}
                            className={`text-indigo-700 font-normal cursor-pointer ${timeType === 'hour' ? 'opacity-100' : 'opacity-50'}`}
                        >Час</span>
                    </div>
                </div>
                <div className="rounded-md flex items-end justify-around">
                    {data.map((entry, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveDay(index)}
                            className={`${activeDay === index ? 'bg-indigo-500' : 'bg-indigo-300'} cursor-pointer w-6 rounded h-[${entry.value / 25}px]`}
                        ></div>
                    ))}
                </div>
                <div className="flex justify-around text-xs text-black">
                    {data.map((entry, index) => (
                        <div key={index} className="flex flex-col opacity-50">
                            <span className="text-center">
                                {entry.date}
                            </span>
                            <span className="text-center">
                                {entry.day}
                            </span>
                        </div>
                    ))}
                </div>
                <p className="my-2 text-black text-center">Заработано <span
                    className="text-indigo-600">{data[activeDay].value} ₽</span></p>
            </div>
            <div className="space-y-2">
                <button className="w-full bg-white py-2 px-4 text-black rounded-lg shadow-sm flex items-center gap-4">
                    <img src="/profileEd.svg" alt="" />
                    <span>Обучение</span>
                </button>
                <button className="w-full bg-white py-2 px-4 text-black rounded-lg shadow-sm flex items-center gap-4">
                    <img src="/profileRe.svg" alt="" />
                    <span>Загрузить резюме</span>
                </button>
                <button className="w-full bg-white py-2 px-4 text-black rounded-lg shadow-sm flex items-center gap-4">
                    <img src="/profileMo.svg" alt="" />
                    <span> 1000 ₽ за друга</span>
                </button>
            </div>
        </div>
    );
};
