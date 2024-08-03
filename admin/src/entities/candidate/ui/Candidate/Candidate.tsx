import cls from './Candidate.module.scss';
import { Button, Text } from '@shared/ui';
import { BorderEnum, classNames, ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';
import { IWorkerState } from '@entities/worker';
import { CandidateItem } from '@entities/candidate';
import { useState } from 'react';

const ITEMS_PER_PAGE = 10;
export const Candidate = () => {
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
        {
            img: '/requests/11.png',
            firstName: 'Мария',
            lastName: 'Сидорова',
            email: 'maria.sidorova@example.com',
            phone: '+7 (999) 111-22-53',
            telegram: '@maria_sidorova',
            whatsapp: '+7 (999) 111-22-54',
            position: 'Электрик',
            about: 'Электрик с опытом монтажа и ремонта электрооборудования.',
            experience: '5 лет в электромонтаже, работа с различными системами освещения.',
            date: '2024-07-11',
        },
        {
            img: '/requests/12.png',
            firstName: 'Олег',
            lastName: 'Григорьев',
            email: 'oleg.grigoryev@example.com',
            phone: '+7 (999) 111-22-55',
            telegram: '@oleg_grigoryev',
            whatsapp: '+7 (999) 111-22-56',
            position: 'Маляр',
            about: 'Маляр, специализирующийся на декоративной покраске интерьеров.',
            experience: '7 лет в малярных работах, опыт в росписи и декоративных техниках.',
            date: '2024-07-12',
        },
        {
            img: '/requests/13.png',
            firstName: 'Наталья',
            lastName: 'Семенова',
            email: 'natalya.semenova@example.com',
            phone: '+7 (999) 111-22-57',
            telegram: '@natalya_semenova',
            whatsapp: '+7 (999) 111-22-58',
            position: 'Плотник',
            about: 'Плотник с опытом в строительстве и отделке деревянных конструкций.',
            experience: '8 лет в плотницких работах, специализация на деревянных домах.',
            date: '2024-07-13',
        },
        {
            img: '/requests/14.png',
            firstName: 'Владимир',
            lastName: 'Калинин',
            email: 'vladimir.kalinin@example.com',
            phone: '+7 (999) 111-22-59',
            telegram: '@vladimir_kalinin',
            whatsapp: '+7 (999) 111-22-60',
            position: 'Плиточник',
            about: 'Плиточник с опытом в укладке плитки в жилых и коммерческих помещениях.',
            experience: '6 лет в плиточных работах, опыт работы с различными плитками.',
            date: '2024-07-14',
        },
        {
            img: '/requests/15.png',
            firstName: 'Екатерина',
            lastName: 'Коваленко',
            email: 'ekaterina.kovalenko@example.com',
            phone: '+7 (999) 111-22-61',
            telegram: '@ekaterina_kovalenko',
            whatsapp: '+7 (999) 111-22-62',
            position: 'Кровельщик',
            about: 'Кровельщик с опытом работы на крышах разной сложности.',
            experience: '7 лет в кровельных работах, работа с различными покрытиями.',
            date: '2024-07-15',
        },
        {
            img: '/requests/16.png',
            firstName: 'Алексей',
            lastName: 'Ефремов',
            email: 'alexey.efremov@example.com',
            phone: '+7 (999) 111-22-63',
            telegram: '@alexey_efremov',
            whatsapp: '+7 (999) 111-22-64',
            position: 'Стяжечник',
            about: 'Специалист по укладке стяжек пола с высоким качеством работы.',
            experience: '5 лет в укладке стяжек, опыт в работе с разными видами растворов.',
            date: '2024-07-16',
        },
        {
            img: '/requests/17.png',
            firstName: 'Марина',
            lastName: 'Филева',
            email: 'marina.fileva@example.com',
            phone: '+7 (999) 111-22-65',
            telegram: '@marina_fileva',
            whatsapp: '+7 (999) 111-22-66',
            position: 'Штукатур',
            about: 'Штукатур с опытом в нанесении штукатурных слоев и отделке стен.',
            experience: '6 лет в штукатурных работах, работа с различными видами отделочных материалов.',
            date: '2024-07-17',
        },
        {
            img: '/requests/18.png',
            firstName: 'Георгий',
            lastName: 'Михайлов',
            email: 'georgy.mikhailov@example.com',
            phone: '+7 (999) 111-22-67',
            telegram: '@georgy_mikhailov',
            whatsapp: '+7 (999) 111-22-68',
            position: 'Электрик',
            about: 'Электрик с опытом установки и ремонта электросистем.',
            experience: '7 лет в электромонтаже, работа с высоковольтными системами.',
            date: '2024-07-18',
        },
        {
            img: '/requests/19.png',
            firstName: 'Ирина',
            lastName: 'Гусева',
            email: 'irina.guseva@example.com',
            phone: '+7 (999) 111-22-69',
            telegram: '@irina_guseva',
            whatsapp: '+7 (999) 111-22-70',
            position: 'Маляр',
            about: 'Маляр с опытом в покраске интерьеров и наружных стен.',
            experience: '6 лет в малярных работах, работа с различными типами красок и покрытий.',
            date: '2024-07-19',
        },
        {
            img: '/requests/20.png',
            firstName: 'Роман',
            lastName: 'Сидоров',
            email: 'roman.sidorov@example.com',
            phone: '+7 (999) 111-22-71',
            telegram: '@roman_sidorov',
            whatsapp: '+7 (999) 111-22-72',
            position: 'Плотник',
            about: 'Плотник с опытом в изготовлении и ремонте деревянных конструкций.',
            experience: '8 лет в плотницких работах, опыт работы с мебелью и строительством.',
            date: '2024-07-20',
        },
        {
            img: '/requests/21.png',
            firstName: 'Светлана',
            lastName: 'Зотова',
            email: 'svetlana.zotova@example.com',
            phone: '+7 (999) 111-22-73',
            telegram: '@svetlana_zotova',
            whatsapp: '+7 (999) 111-22-74',
            position: 'Плиточник',
            about: 'Плиточник с опытом в укладке плитки в ванных комнатах и кухнях.',
            experience: '5 лет в плиточных работах, работа с керамикой и мрамором.',
            date: '2024-07-21',
        },
        {
            img: '/requests/22.png',
            firstName: 'Никита',
            lastName: 'Коновалов',
            email: 'nikita.konovalov@example.com',
            phone: '+7 (999) 111-22-75',
            telegram: '@nikita_konovalov',
            whatsapp: '+7 (999) 111-22-76',
            position: 'Кровельщик',
            about: 'Кровельщик с опытом в укладке и ремонте кровельных покрытий.',
            experience: '6 лет в кровельных работах, работа с черепицей и металлическими покрытиями.',
            date: '2024-07-22',
        },
        {
            img: '/requests/23.png',
            firstName: 'Татьяна',
            lastName: 'Крамаренко',
            email: 'tatiana.kramarenko@example.com',
            phone: '+7 (999) 111-22-77',
            telegram: '@tatiana_kramarenko',
            whatsapp: '+7 (999) 111-22-78',
            position: 'Стяжечник',
            about: 'Стяжечник, специализирующийся на подготовке и укладке стяжек пола.',
            experience: '4 года в укладке стяжек, работа с полимерными и цементными смесями.',
            date: '2024-07-23',
        },
        {
            img: '/requests/24.png',
            firstName: 'Анатолий',
            lastName: 'Шумаков',
            email: 'anatoly.shumakov@example.com',
            phone: '+7 (999) 111-22-79',
            telegram: '@anatoly_shumakov',
            whatsapp: '+7 (999) 111-22-80',
            position: 'Штукатур',
            about: 'Штукатур с опытом работы в отделке стен и потолков.',
            experience: '5 лет в штукатурных работах, опыт работы с гипсовыми и цементными смесями.',
            date: '2024-07-24',
        },
        {
            img: '/requests/25.png',
            firstName: 'Алина',
            lastName: 'Борисова',
            email: 'alina.borisova@example.com',
            phone: '+7 (999) 111-22-81',
            telegram: '@alina_borisova',
            whatsapp: '+7 (999) 111-22-82',
            position: 'Электрик',
            about: 'Электрик с опытом монтажа и обслуживания электрических систем.',
            experience: '7 лет в электромонтаже, работа с различными типами освещения.',
            date: '2024-07-25',
        },
        {
            img: '/requests/26.png',
            firstName: 'Павел',
            lastName: 'Кузьмин',
            email: 'pavel.kuzmin@example.com',
            phone: '+7 (999) 111-22-83',
            telegram: '@pavel_kuzmin',
            whatsapp: '+7 (999) 111-22-84',
            position: 'Маляр',
            about: 'Маляр с опытом в нанесении различных типов покрытий и отделочных материалов.',
            experience: '6 лет в малярных работах, работа с различными красками и лаками.',
            date: '2024-07-26',
        },
        {
            img: '/requests/27.png',
            firstName: 'Евгения',
            lastName: 'Тимофеева',
            email: 'evgenia.timofeeva@example.com',
            phone: '+7 (999) 111-22-85',
            telegram: '@evgenia_timofeeva',
            whatsapp: '+7 (999) 111-22-86',
            position: 'Плотник',
            about: 'Плотник с опытом работы в изготовлении и ремонте деревянных конструкций.',
            experience: '7 лет в плотницких работах, работа с различными видами древесины.',
            date: '2024-07-27',
        },
        {
            img: '/requests/28.png',
            firstName: 'Александр',
            lastName: 'Ильин',
            email: 'alexander.ilyin@example.com',
            phone: '+7 (999) 111-22-87',
            telegram: '@alexander_ilyin',
            whatsapp: '+7 (999) 111-22-88',
            position: 'Плиточник',
            about: 'Плиточник с опытом в укладке плитки в ванных и кухнях.',
            experience: '6 лет в плиточных работах, опыт работы с различными плитками.',
            date: '2024-07-28',
        },
        {
            img: '/requests/29.png',
            firstName: 'Юлия',
            lastName: 'Попова',
            email: 'yulia.popova@example.com',
            phone: '+7 (999) 111-22-89',
            telegram: '@yulia_popova',
            whatsapp: '+7 (999) 111-22-90',
            position: 'Кровельщик',
            about: 'Кровельщик с опытом в укладке различных типов кровельных покрытий.',
            experience: '6 лет в кровельных работах, работа с металлочерепицей и битумной черепицей.',
            date: '2024-07-29',
        },
        {
            img: '/requests/30.png',
            firstName: 'Артем',
            lastName: 'Рыбаков',
            email: 'artem.rybakov@example.com',
            phone: '+7 (999) 111-22-91',
            telegram: '@artem_rybakov',
            whatsapp: '+7 (999) 111-22-92',
            position: 'Стяжечник',
            about: 'Специалист по укладке стяжек пола, опыт работы с различными материалами.',
            experience: '5 лет в укладке стяжек, включая наливные и цементные смеси.',
            date: '2024-07-30',
        },
        {
            img: '/requests/31.png',
            firstName: 'Елена',
            lastName: 'Петрова',
            email: 'elena.petrova@example.com',
            phone: '+7 (999) 111-22-93',
            telegram: '@elena_petrova',
            whatsapp: '+7 (999) 111-22-94',
            position: 'Штукатур',
            about: 'Штукатур с опытом работы в отделке стен и потолков.',
            experience: '6 лет в штукатурных работах, работа с различными типами штукатурок и отделочных материалов.',
            date: '2024-07-31',
        },
        {
            img: '/requests/32.png',
            firstName: 'Станислав',
            lastName: 'Шаров',
            email: 'stanislav.sharov@example.com',
            phone: '+7 (999) 111-22-95',
            telegram: '@stanislav_sharov',
            whatsapp: '+7 (999) 111-22-96',
            position: 'Электрик',
            about: 'Электрик с опытом монтажа и ремонта электрических систем.',
            experience: '8 лет в электромонтаже, работа с различными типами электросетей.',
            date: '2024-08-01',
        },
        {
            img: '/requests/33.png',
            firstName: 'Тимур',
            lastName: 'Морозов',
            email: 'timur.morozov@example.com',
            phone: '+7 (999) 111-22-97',
            telegram: '@timur_morozov',
            whatsapp: '+7 (999) 111-22-98',
            position: 'Маляр',
            about: 'Маляр с опытом в покраске стен и фасадов.',
            experience: '5 лет в малярных работах, работа с различными видами красок и отделочных материалов.',
            date: '2024-08-02',
        },
        {
            img: '/requests/34.png',
            firstName: 'Алина',
            lastName: 'Кузьмина',
            email: 'alina.kuzmina@example.com',
            phone: '+7 (999) 111-22-99',
            telegram: '@alina_kuzmina',
            whatsapp: '+7 (999) 111-22-100',
            position: 'Плотник',
            about: 'Плотник с опытом в строительстве и отделке деревянных конструкций.',
            experience: '7 лет в плотницких работах, опыт работы с мебелью и строительством.',
            date: '2024-08-03',
        },
        {
            img: '/requests/35.png',
            firstName: 'Григорий',
            lastName: 'Федоров',
            email: 'grigory.fedorov@example.com',
            phone: '+7 (999) 111-22-101',
            telegram: '@grigory_fedorov',
            whatsapp: '+7 (999) 111-22-102',
            position: 'Плиточник',
            about: 'Плиточник с опытом работы по укладке плитки на пол и стены.',
            experience: '6 лет в плиточных работах, опыт работы с керамической и мраморной плиткой.',
            date: '2024-08-04',
        },
        {
            img: '/requests/36.png',
            firstName: 'Юлия',
            lastName: 'Данилова',
            email: 'yulia.danilova@example.com',
            phone: '+7 (999) 111-22-103',
            telegram: '@yulia_danilova',
            whatsapp: '+7 (999) 111-22-104',
            position: 'Кровельщик',
            about: 'Кровельщик с опытом работы по ремонту и укладке кровельных покрытий.',
            experience: '6 лет в кровельных работах, работа с различными типами крыш.',
            date: '2024-08-05',
        },
        {
            img: '/requests/37.png',
            firstName: 'Вячеслав',
            lastName: 'Богданов',
            email: 'vyacheslav.bogdanov@example.com',
            phone: '+7 (999) 111-22-105',
            telegram: '@vyacheslav_bogdanov',
            whatsapp: '+7 (999) 111-22-106',
            position: 'Стяжечник',
            about: 'Стяжечник с опытом работы в укладке и выравнивании пола.',
            experience: '4 года в укладке стяжек, работа с разными типами материалов.',
            date: '2024-08-06',
        },
        {
            img: '/requests/38.png',
            firstName: 'Мария',
            lastName: 'Зимина',
            email: 'maria.zimina@example.com',
            phone: '+7 (999) 111-22-107',
            telegram: '@maria_zimina',
            whatsapp: '+7 (999) 111-22-108',
            position: 'Штукатур',
            about: 'Штукатур с опытом в нанесении отделочных слоев и штукатурок.',
            experience: '5 лет в штукатурных работах, работа с различными типами штукатурок.',
            date: '2024-08-07',
        },
        {
            img: '/requests/39.png',
            firstName: 'Сергей',
            lastName: 'Чернов',
            email: 'sergey.chernov@example.com',
            phone: '+7 (999) 111-22-109',
            telegram: '@sergey_chernov',
            whatsapp: '+7 (999) 111-22-110',
            position: 'Электрик',
            about: 'Электрик с опытом в установке и обслуживании электрических систем.',
            experience: '8 лет в электромонтаже, работа с низковольтными системами и освещением.',
            date: '2024-08-08',
        },
        {
            img: '/requests/40.png',
            firstName: 'Валентина',
            lastName: 'Михайлова',
            email: 'valentina.mikhaylova@example.com',
            phone: '+7 (999) 111-22-111',
            telegram: '@valentina_mikhaylova',
            whatsapp: '+7 (999) 111-22-112',
            position: 'Маляр',
            about: 'Маляр с опытом работы в покраске и декоративных отделках.',
            experience: '6 лет в малярных работах, работа с различными типами красок и материалов.',
            date: '2024-08-09',
        },
        {
            img: '/requests/41.png',
            firstName: 'Олег',
            lastName: 'Евсеев',
            email: 'oleg.evseev@example.com',
            phone: '+7 (999) 111-22-113',
            telegram: '@oleg_evseev',
            whatsapp: '+7 (999) 111-22-114',
            position: 'Плотник',
            about: 'Плотник с опытом в строительстве и отделке деревянных конструкций.',
            experience: '7 лет в плотницких работах, опыт в изготовлении мебели и деревянных конструкций.',
            date: '2024-08-10',
        },
        {
            img: '/requests/42.png',
            firstName: 'Анастасия',
            lastName: 'Беляева',
            email: 'anastasia.belyaeva@example.com',
            phone: '+7 (999) 111-22-115',
            telegram: '@anastasia_belyaeva',
            whatsapp: '+7 (999) 111-22-116',
            position: 'Плиточник',
            about: 'Плиточник с опытом укладки плитки в ванных и кухнях.',
            experience: '5 лет в плиточных работах, работа с различными типами плитки.',
            date: '2024-08-11',
        },
        {
            img: '/requests/43.png',
            firstName: 'Денис',
            lastName: 'Карпов',
            email: 'denis.karpov@example.com',
            phone: '+7 (999) 111-22-117',
            telegram: '@denis_karpov',
            whatsapp: '+7 (999) 111-22-118',
            position: 'Кровельщик',
            about: 'Кровельщик с опытом в установке и ремонте различных кровельных покрытий.',
            experience: '6 лет в кровельных работах, работа с металлочерепицей и битумной черепицей.',
            date: '2024-08-12',
        },
        {
            img: '/requests/44.png',
            firstName: 'Светлана',
            lastName: 'Иванова',
            email: 'svetlana.ivanova@example.com',
            phone: '+7 (999) 111-22-119',
            telegram: '@svetlana_ivanova',
            whatsapp: '+7 (999) 111-22-120',
            position: 'Стяжечник',
            about: 'Стяжечник с опытом в подготовке и укладке стяжек пола.',
            experience: '4 года в укладке стяжек, работа с различными материалами.',
            date: '2024-08-13',
        },
        {
            img: '/requests/45.png',
            firstName: 'Юрий',
            lastName: 'Сорокин',
            email: 'yuri.sorokin@example.com',
            phone: '+7 (999) 111-22-121',
            telegram: '@yuri_sorokin',
            whatsapp: '+7 (999) 111-22-122',
            position: 'Штукатур',
            about: 'Штукатур с опытом в отделке стен и потолков.',
            experience: '5 лет в штукатурных работах, работа с различными типами штукатурок и отделочных материалов.',
            date: '2024-08-14',
        },
        {
            img: '/requests/46.png',
            firstName: 'Ангелина',
            lastName: 'Громова',
            email: 'angelina.gromova@example.com',
            phone: '+7 (999) 111-22-123',
            telegram: '@angelina_gromova',
            whatsapp: '+7 (999) 111-22-124',
            position: 'Электрик',
            about: 'Электрик с опытом монтажа и обслуживания электрических систем.',
            experience: '7 лет в электромонтаже, работа с низковольтными и высоковольтными системами.',
            date: '2024-08-15',
        },
        {
            img: '/requests/47.png',
            firstName: 'Кирилл',
            lastName: 'Голубев',
            email: 'kirill.golubev@example.com',
            phone: '+7 (999) 111-22-125',
            telegram: '@kirill_golubev',
            whatsapp: '+7 (999) 111-22-126',
            position: 'Маляр',
            about: 'Маляр с опытом в покраске интерьеров и фасадов.',
            experience: '5 лет в малярных работах, работа с различными красками и отделочными материалами.',
            date: '2024-08-16',
        },
        {
            img: '/requests/48.png',
            firstName: 'Оксана',
            lastName: 'Панова',
            email: 'oksana.panova@example.com',
            phone: '+7 (999) 111-22-127',
            telegram: '@oksana_panova',
            whatsapp: '+7 (999) 111-22-128',
            position: 'Плотник',
            about: 'Плотник с опытом в строительстве и ремонте деревянных конструкций.',
            experience: '7 лет в плотницких работах, опыт в изготовлении и ремонте деревянных элементов.',
            date: '2024-08-17',
        },
        {
            img: '/requests/49.png',
            firstName: 'Ирина',
            lastName: 'Денисова',
            email: 'irina.denisova@example.com',
            phone: '+7 (999) 111-22-129',
            telegram: '@irina_denisova',
            whatsapp: '+7 (999) 111-22-130',
            position: 'Плиточник',
            about: 'Плиточник с опытом в укладке плитки в ванных и кухнях.',
            experience: '5 лет в плиточных работах, работа с керамикой и мрамором.',
            date: '2024-08-18',
        },
        {
            img: '/requests/50.png',
            firstName: 'Анатолий',
            lastName: 'Симонов',
            email: 'anatoly.simonov@example.com',
            phone: '+7 (999) 111-22-131',
            telegram: '@anatoly_simonov',
            whatsapp: '+7 (999) 111-22-132',
            position: 'Кровельщик',
            about: 'Кровельщик с опытом в укладке и ремонте кровельных покрытий.',
            experience: '6 лет в кровельных работах, работа с различными типами покрытий.',
            date: '2024-08-19',
        },
        {
            img: '/requests/51.png',
            firstName: 'Евгений',
            lastName: 'Костин',
            email: 'evgeny.kostin@example.com',
            phone: '+7 (999) 111-22-133',
            telegram: '@evgeny_kostin',
            whatsapp: '+7 (999) 111-22-134',
            position: 'Стяжечник',
            about: 'Стяжечник с опытом в подготовке и укладке стяжек пола.',
            experience: '4 года в укладке стяжек, работа с различными материалами.',
            date: '2024-08-20',
        },
        {
            img: '/requests/52.png',
            firstName: 'Татьяна',
            lastName: 'Воробьева',
            email: 'tatiana.vorobyeva@example.com',
            phone: '+7 (999) 111-22-135',
            telegram: '@tatiana_vorobyeva',
            whatsapp: '+7 (999) 111-22-136',
            position: 'Штукатур',
            about: 'Штукатур с опытом в нанесении и отделке штукатурок.',
            experience: '5 лет в штукатурных работах, работа с различными типами штукатурок и отделочных материалов.',
            date: '2024-08-21',
        },
        {
            img: '/requests/53.png',
            firstName: 'Никита',
            lastName: 'Назаров',
            email: 'nikita.nazarov@example.com',
            phone: '+7 (999) 111-22-137',
            telegram: '@nikita_nazarov',
            whatsapp: '+7 (999) 111-22-138',
            position: 'Электрик',
            about: 'Электрик с опытом в установке и обслуживании электрических систем.',
            experience: '8 лет в электромонтаже, работа с различными системами освещения.',
            date: '2024-08-22',
        },
        {
            img: '/requests/54.png',
            firstName: 'Марина',
            lastName: 'Родионова',
            email: 'marina.rodionova@example.com',
            phone: '+7 (999) 111-22-139',
            telegram: '@marina_rodionova',
            whatsapp: '+7 (999) 111-22-140',
            position: 'Маляр',
            about: 'Маляр с опытом в покраске интерьеров и фасадов.',
            experience: '6 лет в малярных работах, работа с различными типами красок и отделочных материалов.',
            date: '2024-08-23',
        },
        {
            img: '/requests/55.png',
            firstName: 'Дмитрий',
            lastName: 'Филатов',
            email: 'dmitry.filatov@example.com',
            phone: '+7 (999) 111-22-141',
            telegram: '@dmitry_filatov',
            whatsapp: '+7 (999) 111-22-142',
            position: 'Плотник',
            about: 'Плотник с опытом в строительстве и отделке деревянных конструкций.',
            experience: '7 лет в плотницких работах, опыт работы с мебелью и строительством.',
            date: '2024-08-24',
        },
        {
            img: '/requests/56.png',
            firstName: 'Светлана',
            lastName: 'Смирнова',
            email: 'svetlana.smirnova@example.com',
            phone: '+7 (999) 111-22-143',
            telegram: '@svetlana_smirnova',
            whatsapp: '+7 (999) 111-22-144',
            position: 'Плиточник',
            about: 'Плиточник с опытом в укладке плитки на пол и стены.',
            experience: '6 лет в плиточных работах, опыт работы с различными типами плитки.',
            date: '2024-08-25',
        },
        {
            img: '/requests/57.png',
            firstName: 'Лариса',
            lastName: 'Фролова',
            email: 'larisa.frolova@example.com',
            phone: '+7 (999) 111-22-145',
            telegram: '@larisa_frolova',
            whatsapp: '+7 (999) 111-22-146',
            position: 'Кровельщик',
            about: 'Кровельщик с опытом в ремонте и укладке кровельных покрытий.',
            experience: '5 лет в кровельных работах, работа с различными типами покрытий.',
            date: '2024-08-26',
        },
        {
            img: '/requests/58.png',
            firstName: 'Николай',
            lastName: 'Ребров',
            email: 'nikolay.rebrov@example.com',
            phone: '+7 (999) 111-22-147',
            telegram: '@nikolay_rebrov',
            whatsapp: '+7 (999) 111-22-148',
            position: 'Стяжечник',
            about: 'Стяжечник с опытом в укладке стяжек пола.',
            experience: '5 лет в укладке стяжек, работа с различными типами материалов.',
            date: '2024-08-27',
        },
        {
            img: '/requests/59.png',
            firstName: 'Ирина',
            lastName: 'Петрова',
            email: 'irina.petrov@example.com',
            phone: '+7 (999) 111-22-149',
            telegram: '@irina_petrov',
            whatsapp: '+7 (999) 111-22-150',
            position: 'Штукатур',
            about: 'Штукатур с опытом в отделке и ремонте стен и потолков.',
            experience: '6 лет в штукатурных работах, работа с различными типами штукатурок и отделочных материалов.',
            date: '2024-08-28',
        },
        {
            img: '/requests/60.png',
            firstName: 'Роман',
            lastName: 'Зайцев',
            email: 'roman.zaytsev@example.com',
            phone: '+7 (999) 111-22-151',
            telegram: '@roman_zaytsev',
            whatsapp: '+7 (999) 111-22-152',
            position: 'Электрик',
            about: 'Электрик с опытом работы в установке и обслуживании электрических систем.',
            experience: '7 лет в электромонтаже, работа с различными типами систем и оборудования.',
            date: '2024-08-29',
        },
    ];


    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(workers.length / ITEMS_PER_PAGE);

    const currentWorkers = workers.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE,
    );

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <li className={cls.paginationItem} key={i}>
                    <Button
                        className={classNames(cls.paginationIcon, {
                            [cls.active]: currentPage === 1,
                        }, [])}
                        onClick={() => setCurrentPage(i)}
                        disabled={currentPage === i}
                        size={SizeEnum.H4}
                        border={BorderEnum.H6}
                        color={currentPage === i ? ColorEnum.WHITE : ColorEnum.PRIMARY}
                        bgColor={currentPage === i ? ColorEnum.PRIMARY : ColorEnum.BG}
                    >
                        {i}
                    </Button>
                </li>,
            );
        }
        return pageNumbers;
    };

    return (
        <div className={cls.container}>
            <div className={cls.wrapper}>
                <div className={cls.info}>
                    <Text.Paragraph
                        size={SizeEnum.H2}
                        color={ColorEnum.TEXT}
                        weight={WeightEnum.BOLD}
                    >
                        Все кандидаты
                    </Text.Paragraph>
                    {/* Tooltip можно оставить или удалить в зависимости от необходимости */}
                </div>
                <ul className={cls.list}>
                    {currentWorkers.map((item) => (
                        <CandidateItem key={item.img} {...item} />
                    ))}
                </ul>
            </div>
            <ul className={cls.pagination}>
                <li className={cls.paginationItem}>
                    <Button
                        className={classNames(cls.paginationIcon, {
                            [cls.active]: currentPage === 1,
                        }, [])}
                        onClick={() => setCurrentPage(prevState => prevState > 1 ? prevState - 1 : prevState)}
                        disabled={currentPage === 1}
                        size={SizeEnum.H4}
                        border={BorderEnum.H6}
                        color={ColorEnum.PRIMARY}
                        bgColor={ColorEnum.BG}
                    >
                        &lt;
                    </Button>
                </li>
                {renderPageNumbers()}
                <li className={cls.paginationItem}>
                    <Button
                        className={classNames(cls.paginationIcon, {
                            [cls.active]: currentPage === totalPages,
                        }, [])}
                        onClick={() => setCurrentPage(prevState => prevState < totalPages ? prevState + 1 : prevState)}
                        disabled={currentPage === totalPages}
                        size={SizeEnum.H4}
                        border={BorderEnum.H6}
                        color={ColorEnum.PRIMARY}
                        bgColor={ColorEnum.BG}
                    >
                        &gt;
                    </Button>
                </li>
            </ul>
        </div>
    );
};