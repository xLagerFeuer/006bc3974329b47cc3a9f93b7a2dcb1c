import React, { useState } from 'react';
import TaskNearbyComponent from "./TaskNearbyComponent";
import CardComponent from './CardComponent';
/* eslint-disable no-undef */
interface TabProps {
    label: string;
    active: boolean;
    onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ label, active, onClick }) => {
    return (
        <button
            className={`flex-1 py-2 px-4 mx-[-15px] ${
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
        // Добавьте другие карточки по аналогии
    ];

    return (
        <div className="w-full pt-2 bg-gray-100">
            <div className="flex justify-center my-4 rounded-full p-1 px-16">
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
                    <div className={'max-w-sm mx-auto'}>
                        {cards.map((card, index) => (
                            <CardComponent key={index} {...card} />
                        ))}
                    </div>
                )}
                {activeTab === 'slots' && (
                    <div>Содержание для &quot;Ваши слоты&quot;</div>
                )}
            </div>
        </div>
    );
};

export default TabComponent;