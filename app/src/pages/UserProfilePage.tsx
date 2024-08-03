import { IonBackButton, IonContent, IonPage, IonRouterLink } from '@ionic/react';
import React from 'react';
import './../theme/tailwind.css';
import { Finances } from '../components/Finances';

const UserProfilePage: React.FC = () => {
    return (
        <IonPage>
            <IonContent className="h-full">
                <header className="flex mx-2 items-start justify-between">
                    <button
                        className="text-xl mt-8 bg-white w-12 h-12 flex items-center justify-center rounded-full "
                    >
                        <IonBackButton
                            className="text-black"
                            defaultHref="/home"
                        >
                        </IonBackButton>
                    </button>
                    <div className="flex flex-col gap-4 items-center mt-8">
                        <img className="w-28" src="/user.png" alt="" />
                        <div className="flex flex-col gap-1">
                              <span className="text-md font-normal text-black text-center">
                            Александр Иванов
                        </span>
                            <span className="text-xs font-normal text-black opacity-50 text-center">
                            самозанятый
                        </span>
                        </div>
                    </div>
                    <IonRouterLink href="profile/edit">
                        <button
                            className="text-xl mt-8  bg-white w-12 h-12 flex items-center justify-center rounded-full mr-4"
                        >
                            <img src="/settings.svg" alt="" />
                        </button>
                    </IonRouterLink>

                </header>
                <div className="flex justify-center gap-2 m-4">
                    <div
                        className="flex cursor-pointer w-2/5 flex-col p-3 rounded-3xl items-center justify-center bg-[#DCF831C4] bg-gradient-to-t">
                            <span className="text-black text-xs">
                                Ваша надежность
                            </span>
                        <span className="text-black text-xs">
                                100
                            </span>
                    </div>
                    <div
                        className="flex cursor-pointer w-2/5 flex-col p-3 rounded-3xl items-center justify-center bg-indigo-500 bg-gradient-to-t">
                        <span className="text-white text-xs">
                                Отзывы
                            </span>
                    </div>
                </div>
                <div className="flex items-center mx-2 gap-4 justify-center">
                    <div className="relative">
                        <img className="w-full" src="/profile1.png" alt="" />
                        <div className="absolute bottom-2 right-2 rounded-md bg-[#DCF831C4]">
                            <span className="text-indigo-500 text-[10px] leading-3">
                                Станьте наставником
                            </span>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="/profile2.png" alt="" />
                        <div className="absolute bottom-2 right-2 rounded-md bg-[#DCF831C4]">
                            <span className="text-indigo-500 text-[10px] leading-3">
                                Новое обучение
                            </span>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="/profile3.png" alt="" />
                        <div className="absolute bottom-2 right-2 rounded-md bg-[#DCF831C4]">
                            <span className="text-indigo-500 text-[10px] leading-3">
                                Советы опытных разнорабочих
                            </span>
                        </div>
                    </div>
                </div>
                <Finances />
            </IonContent>
        </IonPage>
    )
        ;
};

export default UserProfilePage;
