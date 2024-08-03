import React, { useState } from 'react';

const TaskNearbyComponent: React.FC = () => {
    const [isRecomendationActive, setIsRecomendationActive] = useState<boolean>(false);
    const [isFilter, setIsFilter] = useState<boolean>(false);

    return (
        <div className="flex items-center justify-between text-sm">
            <div className="text-gray-500">
                <span className="block text-sm">Задания рядом</span>
                <a href="#" className="text-black text-xs">г. Краснодар &gt;</a>
            </div>
            <div className="flex space-x-1">
                <button
                    onClick={() => setIsRecomendationActive(prevState => !prevState)}
                    type="button"
                    className={`py-2 px-3 border border-gray-300 rounded-full text-sm transition ring-1 ring-gray-300 ${
                        isRecomendationActive ? 'bg-indigo-600 text-white' : 'bg-white text-black'
                    }`}
                >
                    Рекомендации
                </button>
                <button
                    onClick={() => setIsFilter(prevState => !prevState)}
                    type="button"
                    className={`py-2 px-3 border border-gray-300 rounded-full text-sm transition ring-1 ring-gray-300 ${
                        isFilter ? 'bg-indigo-600 text-white' : 'bg-white text-black'
                    }`}
                >
                    Фильтры
                </button>
            </div>
        </div>
    );
};

export default TaskNearbyComponent;