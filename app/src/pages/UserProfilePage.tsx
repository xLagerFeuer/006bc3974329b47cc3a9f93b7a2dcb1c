import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import './Home.css';
import './../theme/tailwind.css';

const UserProfilePage: React.FC = () => {

    return (
        <IonPage>
            <IonContent className="flex items-center justify-center h-full bg-gray-300">
                <header className="w-full items-end justify-content-center justify-center bg-gray-300">
                    <div className="flex items-center w-full bg-transparent mt-8 mb-8">
                        <button
                            className="text-xl bg-white w-12 h-10 flex items-center justify-center rounded-full mr-4"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                            </svg>
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
            </IonContent>
        </IonPage>
    );
};

export default UserProfilePage;
