import { createBrowserRouter, redirect } from 'react-router-dom';
import {
    CandidatePage,
    InterviewPage,
    LoginPage,
    MainPage,
    MyPage,
    RegisterPage,
    VacancyPage,
    WorkTimePage,
} from '@pages/ui';
import { SidebarProvider } from '@widgets/lib/utils/SidebarProvider';
import 'react-calendar/dist/Calendar.css';
import { AuthProvider } from '@app/providers/AuthProvider.tsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthProvider />,
        children: [
            {
                index: true,
                element: <SidebarProvider><MainPage /></SidebarProvider>,
            },
            {
                path: 'vacancy',
                element: <SidebarProvider><VacancyPage /></SidebarProvider>,
            },
            {
                path: 'candidate',
                element: <SidebarProvider><CandidatePage /></SidebarProvider>,
            },

            {
                path: 'interview',
                element: <SidebarProvider><InterviewPage /></SidebarProvider>,
            },

            {
                path: 'workTime',
                element: <SidebarProvider><WorkTimePage /></SidebarProvider>,
            },
            {
                path: 'me',
                element: <SidebarProvider><MyPage /></SidebarProvider>,
            },
        ],
    },
    {
        path: '/auth',
        children: [
            {
                index: true,
                loader: async () => redirect('/auth/login'),
            },
            {
                path: 'login',
                element: <LoginPage />,
            },
            {
                path: 'register',
                element: <RegisterPage />,
            },
        ],
    },
]);
