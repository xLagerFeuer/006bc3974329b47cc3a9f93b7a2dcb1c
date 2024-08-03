import { INavigation } from '@features/navigation';
import Home from '@assets/icons/home.svg';
import Candidate from '@assets/icons/candidate.svg';
import Vacancy from '@assets/icons/vacancy.svg';
import Interview from '@assets/icons/interview.svg';
import WorkTime from '@assets/icons/workTime.svg';

export const NavigationConfig: INavigation[] = [
    { path: '/', label: 'Главная', icon: Home },
    { path: '/vacancy', label: 'Активные вакансии', icon: Vacancy },
    { path: '/candidate', label: 'Кандидаты', icon: Candidate },
    { path: '/interview', label: 'Интервью', icon: Interview },
    { path: '/workTime', label: 'Управление сменами', icon: WorkTime },
];