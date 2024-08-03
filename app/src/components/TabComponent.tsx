import React, { useState } from 'react';
import TaskNearbyComponent from './TaskNearbyComponent';
import CardComponent from './CardComponent';
import {Link} from "react-router-dom";

/* eslint-disable no-undef */
interface TabProps {
    label: string;
    active: boolean;
    onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ label, active, onClick }) => {
    return (
        <button
            className={`flex-1 text-sm py-2 px-2 -mx-3 ${
                active ? 'bg-indigo-500 text-white z-10' : 'bg-white text-indigo-500'
            } rounded-full transition-colors duration-200 focus:outline-none`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

const TabComponent: React.FC = () => {
    const [activeTab, setActiveTab] = useState('available');
    const cards = [
        {
            jobTitle: 'Разнорабочий',
            location: 'Краснодарский край, ст. Динская, ул. Железнодорожная 265А',
            distance: '720 м',
            participants: '7/10',
            reward: '2800 Р',
            endDate: new Date(Date.now() + 200000 * 1000).toISOString(), // ISO строка конечной даты
        },
        {
            jobTitle: 'Разнорабочий',
            location: 'Краснодарский край, ст. Динская, ул. Железнодорожная 265А',
            distance: '720 м',
            participants: '7/10',
            reward: '2800 Р',
            endDate: new Date(Date.now() + 200000 * 1000).toISOString(), // ISO строка конечной даты
        },
        {
            jobTitle: 'Разнорабочий',
            location: 'Краснодарский край, ст. Динская, ул. Железнодорожная 265А',
            distance: '720 м',
            participants: '7/10',
            reward: '2800 Р',
            endDate: new Date(Date.now() + 200000 * 1000).toISOString(), // ISO строка конечной даты
        },
    ];

    return (
        <div className="w-full flex flex-col h-full pt-2 bg-gray-100">
            <div className="flex justify-center my-4 rounded-full p-2 max-w-sm px-10">
                <Tab
                    label="Доступные"
                    active={activeTab === 'available'}
                    onClick={() => setActiveTab('available')}
                />
                <Tab
                    label="Ваши слоты"
                    active={activeTab === 'slots'}
                    onClick={() => setActiveTab('slots')}
                />
            </div>
            <div className="mt-4 py-4 px-2 space-y-4 rounded">
                <TaskNearbyComponent />
                {activeTab === 'available' && (
                    <ul className={'max-w-sm flex flex-col gap-4 mx-auto'}>
                        {cards.map((card, index) => (
                            <CardComponent key={index} {...card} />
                        ))}
                    </ul>
                )}
                {activeTab === 'slots' && (
                    <ul className={'max-w-sm flex flex-col gap-4 mx-auto'}>
                        {cards.map((card, index) => (
                            <CardComponent key={index} {...card} />
                        ))}
                    </ul>
                )}
            </div>
            <div className={'mx-auto mt-4'}>
                <Link to="/map" className="flex-1 text-sm py-2 px-4 bg-indigo-500 text-white rounded-full">
                    На карте
                </Link>
            </div>
        </div>
    );
};

export default TabComponent;