import { IonContent, IonPage, IonModal, IonButton, IonHeader, IonToolbar, IonTitle, IonButtons, IonItem, IonLabel, IonInput } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import './../theme/tailwind.css';
import SideMenu from "../components/SideMenu/SideMenu";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const MapPage: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [presentingElement, setPresentingElement] = useState<HTMLElement | undefined>(undefined);

    useEffect(() => {
        const el = document.querySelector('.ion-page');
        if (el instanceof HTMLElement) {
            setPresentingElement(el);
        }
    }, []);

    return (
        <IonPage>
            <IonContent className="bg-gray-300">
                <SideMenu />
                <div className="map-container w-full h-screen relative">
                    <YMaps>
                        <Map defaultState={{ center: [45.032889, 38.976916], zoom: 15 }} width="100%" height="100%">
                            <Placemark geometry={[45.032889, 38.976916]} />
                        </Map>
                    </YMaps>
                    <div className="absolute top-4 left-4">
                        <button type="button" className="text-sm py-2 px-4 text-indigo-500 bg-white rounded-full" onClick={() => setShowModal(true)}>
                            Фильтры
                        </button>
                    </div>
                </div>
                <IonModal isOpen={showModal} presentingElement={presentingElement} onDidDismiss={() => setShowModal(false)}>
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>Фильтры организаций</IonTitle>
                            <IonButtons slot="end">
                                <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
                            </IonButtons>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        <form className="ion-padding">
                            <IonItem>
                                <IonLabel position="stacked">Название организации</IonLabel>
                                <IonInput placeholder="Введите название" />
                            </IonItem>
                            <IonItem>
                                <IonLabel position="stacked">Тип организации</IonLabel>
                                <IonInput placeholder="Введите тип" />
                            </IonItem>
                            <IonItem>
                                <IonLabel position="stacked">Рейтинг</IonLabel>
                                <IonInput placeholder="Введите рейтинг" />
                            </IonItem>
                            <div className="ion-padding-top">
                                <IonButton expand="block" onClick={() => setShowModal(false)}>Применить фильтры</IonButton>
                            </div>
                        </form>
                    </IonContent>
                </IonModal>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <Link to="/home" className="text-sm py-2 px-4 bg-indigo-500 text-white rounded-full">
                        Список
                    </Link>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default MapPage;