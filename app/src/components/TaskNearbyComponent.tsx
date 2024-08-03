import React, {useState} from 'react';

const TaskNearbyComponent: React.FC = () => {
    const [isRecomendationActive, setIsRecomendationActive] = useState<boolean>(false);
    const [isFilter, setIsFilter] = useState<boolean>(false);

    return (
        <div className="flex items-center justify-between text-sm">
            <div className="text-gray-500">
                <span className="block">Задания рядом</span>
                <a href="#" className="text-black font-semibold">г. Краснодар &gt;</a>
            </div>
            <div className="flex space-x-2">
                <button
                    onClick={() => setIsRecomendationActive(!isRecomendationActive)}
                    type="button"
                    className={`py-2 px-4 border border-gray-300 rounded-full text-black transition ring-1 ring-gray-300 ${
                        isRecomendationActive ? 'bg-transparent' : 'bg-gray-300'
                    }`}
                >
                    Рекомендации
                </button>
                <button
                    onClick={() => setIsFilter(!isFilter)}
                    type="button"
                    className={`py-2 px-4 border border-gray-300 rounded-full text-black transition ring-1 ring-gray-300 ${
                        isFilter ? 'bg-transparent' : 'bg-gray-300'
                    }`}
                >
                    Фильтры
                </button>
            </div>
        </div>
    );
};

export default TaskNearbyComponent;