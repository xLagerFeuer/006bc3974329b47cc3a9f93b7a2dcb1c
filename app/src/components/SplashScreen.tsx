import React from 'react';
import background from './assets/background.png';

/* Theme variables */
import '../theme/variables.css';
/* Tailwind styles */
import '../theme/tailwind.css';

const SplashScreen: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
    return (
        <div className={`fixed inset-0 flex items-center justify-center bg-blue-500 z-50 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <img src={background} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
            <h1 className="text-white text-4xl z-10">Загрузка...</h1>
        </div>
    );
};

export default SplashScreen;