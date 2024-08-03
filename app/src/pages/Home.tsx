import { IonContent, IonPage } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './Home.css';
import SplashScreen from "../components/SplashScreen";
import SideMenu from "../components/SideMenu/SideMenu";
import './../theme/tailwind.css';
import Slots from "../components/Slots";
import TabComponent from "../components/TabComponent";

const Home: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isSplashVisible, setIsSplashVisible] = useState(true);

    useEffect(() => {
        // Имитация процесса загрузки
        const timer = setTimeout(() => {
            setIsSplashVisible(false);
            // Устанавливаем isLoading в false после завершения анимации
            setTimeout(() => {
                setIsLoading(false);
            }, 1000); // Длительность анимации 1 секунда
        }, 1000); // 1 секунды для примера

        return () => clearTimeout(timer);
    }, []);

  return (
      <IonPage>
          {isLoading && <SplashScreen isVisible={isSplashVisible} />}
          {!isLoading && (
              <IonContent className="flex items-center justify-center h-full bg-gray-300">
                  <SideMenu/>
                  <Slots/>
                  <TabComponent />
              </IonContent>
          )}
      </IonPage>
  );
};

export default Home;
