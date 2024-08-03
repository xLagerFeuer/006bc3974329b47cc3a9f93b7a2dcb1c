import React from 'react';
import { IonBackButton } from '@ionic/react';

export const EditProfilePage = () => {
    return (
        <div className="flex flex-col bg-[#F3F5F4] min-h-screen">
            <header className="flex gap-4 items-center px-4">
                <button
                    className="text-xl mt-8 w-12 h-12 flex items-center justify-center"
                >
                    <IonBackButton
                        className="text-black"
                        defaultHref="/profile"
                    />
                </button>
                <span className="mt-8 text-black text-lg">
                    Редактировать профиль
                </span>
            </header>
            <div className="bg-[#F3F5F4] mt-4 mx-2 flex flex-col items-center">
                <div className="relative">
                    <img
                        className="w-36"
                        src="/user.png" alt="" />
                    <div
                        className="absolute -bottom-2 -right-2 p-4 h-12 w-12 flex items-center justify-center rounded-full bg-white">
                        <img src="/edit.svg" alt="" />
                    </div>
                </div>
            </div>
            <form className="bg-white text-black mt-6 mx-4 p-6 rounded-3xl shadow-md space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Имя</label>
                    <input
                        type="text"
                        id="name"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="surname" className="block text-sm font-medium text-gray-700">Фамилия</label>
                    <input
                        type="text"
                        id="surname"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">Дата</label>
                    <input
                        type="date"
                        id="date"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="flex items-center gap-4">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                        />
                        <span className="ml-2 text-sm">Мужской</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                        />
                        <span className="ml-2 text-sm">Женский</span>
                    </label>
                </div>
                <button
                    type="submit"
                    className="w-full  bg-white text-indigo-500 ring-indigo-500 ring-1 py-2 rounded-3xl shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Сохранить
                </button>
            </form>
        </div>
    );
};
