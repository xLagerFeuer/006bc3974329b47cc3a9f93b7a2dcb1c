import { INavigation } from '@features/navigation';
import Home from '@assets/icons/home.svg';

export const NavigationConfig: INavigation[] = [
    { path: '/', label: 'Главная', icon: Home },
    { path: '/products', label: 'Активные вакансии', icon: Home },
    { path: '/about', label: 'Заявки', icon: Home },
    { path: '/about', label: 'Интервью', icon: Home },
    { path: '/about', label: 'Управление сменами', icon: Home },
];