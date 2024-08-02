import cls from './AllRequests.module.scss';
import { Text, Tooltip } from '@shared/ui';
import { ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';
import { AllRequestsItem } from '@widgets/ui';
import { IWorkerState } from '@entities/worker';

export const AllRequests = () => {
    const workers: IWorkerState[] = [
        {
            img: '/requests/1.png',
            firstName: 'Иван',
            lastName: 'Иванов',
            email: 'ivan.ivanov@example.com',
            phone: '+7 (999) 111-22-33',
            telegram: '@ivan_ivanov',
            whatsapp: '+7 (999) 111-22-34',
            position: 'Строитель',
            about: 'Опытный строитель, специализирующийся на общестроительных работах.',
            experience: '5 лет в строительстве, работа на различных строительных площадках.',
            date: '2024-07-01',
        },
        {
            img: '/requests/2.png',
            firstName: 'Петр',
            lastName: 'Петров',
            email: 'petr.petrov@example.com',
            phone: '+7 (999) 111-22-35',
            telegram: '@petr_petrov',
            whatsapp: '+7 (999) 111-22-36',
            position: 'Плиточник',
            about: 'Плиточник с большим опытом укладки плитки различных типов.',
            experience: '6 лет работы в укладке плитки, включая керамогранит и мрамор.',
            date: '2024-07-02',
        },
        {
            img: '/requests/3.png',
            firstName: 'Сергей',
            lastName: 'Сергеев',
            email: 'sergey.sergeev@example.com',
            phone: '+7 (999) 111-22-37',
            telegram: '@sergey_sergeev',
            whatsapp: '+7 (999) 111-22-38',
            position: 'Электрик',
            about: 'Электрик, специализирующийся на монтаже и ремонте электрических систем.',
            experience: '7 лет в электромонтаже, опыт работы с различными типами электросетей.',
            date: '2024-07-03',
        },
        {
            img: '/requests/4.png',
            firstName: 'Анна',
            lastName: 'Кузнецова',
            email: 'anna.kuznetsova@example.com',
            phone: '+7 (999) 111-22-39',
            telegram: '@anna_kuznetsova',
            whatsapp: '+7 (999) 111-22-40',
            position: 'Кровельщик',
            about: 'Кровельщик с опытом работы на различных типах крыш.',
            experience: '5 лет в ремонте и установке кровельных покрытий, работа с различными материалами.',
            date: '2024-07-04',
        },
        {
            img: '/requests/5.png',
            firstName: 'Дмитрий',
            lastName: 'Соколов',
            email: 'dmitry.sokolov@example.com',
            phone: '+7 (999) 111-22-41',
            telegram: '@dmitry_sokolov',
            whatsapp: '+7 (999) 111-22-42',
            position: 'Маляр',
            about: 'Маляр с опытом в покраске стен и потолков, а также декоративных отделочных работах.',
            experience: '8 лет в малярных работах, включая работу с различными видами красок и отделочных материалов.',
            date: '2024-07-05',
        },
        {
            img: '/requests/6.png',
            firstName: 'Ольга',
            lastName: 'Попова',
            email: 'olga.popova@example.com',
            phone: '+7 (999) 111-22-43',
            telegram: '@olga_popova',
            whatsapp: '+7 (999) 111-22-44',
            position: 'Плотник',
            about: 'Плотник, специализирующийся на строительстве и ремонте деревянных конструкций.',
            experience: '7 лет в плотницких работах, опыт работы с различными видами древесины.',
            date: '2024-07-06',
        },
        {
            img: '/requests/7.png',
            firstName: 'Андрей',
            lastName: 'Лебедев',
            email: 'andrey.lebedev@example.com',
            phone: '+7 (999) 111-22-45',
            telegram: '@andrey_lebedev',
            whatsapp: '+7 (999) 111-22-46',
            position: 'Сантехник',
            about: 'Сантехник с опытом установки и ремонта водопроводных систем.',
            experience: '6 лет работы в сфере сантехники, установка систем водоснабжения и отопления.',
            date: '2024-07-07',
        },
        {
            img: '/requests/8.png',
            firstName: 'Елена',
            lastName: 'Морозова',
            email: 'elena.morozova@example.com',
            phone: '+7 (999) 111-22-47',
            telegram: '@elena_morozova',
            whatsapp: '+7 (999) 111-22-48',
            position: 'Фасадчик',
            about: 'Фасадчик с опытом работы по ремонту и отделке фасадов зданий.',
            experience: '5 лет работы в фасадных работах, включая утепление и штукатурку.',
            date: '2024-07-08',
        },
        {
            img: '/requests/9.png',
            firstName: 'Игорь',
            lastName: 'Новиков',
            email: 'igor.novikov@example.com',
            phone: '+7 (999) 111-22-49',
            telegram: '@igor_novikov',
            whatsapp: '+7 (999) 111-22-50',
            position: 'Стяжечник',
            about: 'Стяжечник, специализирующийся на укладке стяжек пола.',
            experience: '4 года работы в укладке стяжек, включая полимерные и цементные растворы.',
            date: '2024-07-09',
        },
        {
            img: '/requests/10.png',
            firstName: 'Виктория',
            lastName: 'Федорова',
            email: 'victoria.fedorova@example.com',
            phone: '+7 (999) 111-22-51',
            telegram: '@victoria_fedorova',
            whatsapp: '+7 (999) 111-22-52',
            position: 'Штукатур',
            about: 'Штукатур с опытом в нанесении штукатурных слоев и отделочных работах.',
            experience: '6 лет в штукатурных работах, работа с различными типами штукатурок.',
            date: '2024-07-10',
        },
    ];


    return (
        <div className={cls.wrapper}>
            <div className={cls.info}>
                <Text.Paragraph
                    size={SizeEnum.H2}
                    color={ColorEnum.TEXT}
                    weight={WeightEnum.BOLD}
                >
                    Новые заявки
                </Text.Paragraph>
                <Tooltip text={'aboba 2'} />
            </div>
            <ul className={cls.list}>
                {workers.map((item, index) => (
                    <AllRequestsItem key={item.img} {...item} />
                ))}
            </ul>
        </div>
    );
};

