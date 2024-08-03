import React from 'react';
import { IonMenu } from '@ionic/react';
import { Link } from 'react-router-dom';
/* Tailwind styles */
import '../../theme/tailwind.css';

const SideMenu: React.FC = () => {
    return (
        <>
            <IonMenu side="start" menuId="first" contentId="main-content">
                <div className="bg-indigo-400 h-screen p-4 flex flex-col">
                    <button
                        className="text-xl text-white mb-4 self-end font-bold"
                        onClick={() => document.querySelector('ion-menu')?.close()}
                    >
                        ✕
                    </button>
                    <Link to="/home" className="text-2xl text-white mb-4 ml-4 mt-8 no-underline font-bold">
                        Главная страница
                    </Link>
                    <Link to="/profile" className="text-2xl text-white mb-4 ml-4 no-underline font-bold">
                        Мой профиль
                    </Link>
                    <Link to="/page3" className="text-2xl text-white mb-4 ml-4 no-underline font-bold">
                        Вакансии
                    </Link>
                    <Link to="/page3" className="text-2xl text-white mb-4 ml-4 no-underline font-bold">
                        Мои заявки
                    </Link>
                    <Link to="/page3" className="text-2xl text-white mb-4 ml-4 no-underline font-bold">
                        Смены
                    </Link>
                    <Link to="/page3" className="text-2xl text-white mb-4 ml-4 no-underline font-bold">
                        Сообщения
                    </Link>
                    <Link to="/page3" className="text-2xl text-white mb-4 ml-4 no-underline font-bold">
                        Поддержка
                    </Link>
                    <Link to="/page3" className="text-2xl text-red-400 mb-4 ml-4 no-underline text-center mt-auto">
                        Выйти
                    </Link>
                </div>
            </IonMenu>

            <div id="main-content">
                <header className="bg-gray-100 flex items-center justify-between px-4">
                    <div className="flex items-center w-full bg-transparent mt-8 mb-8">
                        <button
                            className="text-xl bg-white w-12 h-10 flex items-center justify-center rounded-full mr-4"
                            onClick={() => document.querySelector('ion-menu')?.open()}
                        >
                            <img src="/menu.svg" alt="" />
                        </button>
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Введите ваш запрос..."
                                className="rounded-full px-4 py-2 border border-gray-300 w-full"
                            />
                            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                                🔍
                            </button>
                        </div>
                    </div>
                </header>
            </div>
        </>
    );
};

export default SideMenu;