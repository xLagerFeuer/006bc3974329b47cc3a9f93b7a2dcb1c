import cls from './VacancyPage.module.scss';
import { Button, Select, Text } from '@shared/ui';
import { BorderEnum, classNames, ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';
import { IVacancy, VacancyList, VacancyType } from '@entities/vacancy';
import { useEffect, useState } from 'react';

export const vacancies: IVacancy[] = [
    {
        companyName: 'СтройСервис',
        jobTitle: 'Строитель',
        count: '5',
        location: 'Москва',
        workTime: 'Полный рабочий день',
        salary: '40,000 - 50,000 руб',
        date: '01.01.2024',
        description: 'Опытный строитель для работы на строительных площадках.',
        type: VacancyType.LOW,
    },
    {
        companyName: 'ПлиткаМастер',
        jobTitle: 'Плиточник',
        count: '3',
        location: 'Санкт-Петербург',
        workTime: 'Полный рабочий день',
        salary: '45,000 - 55,000 руб.',
        date: '02.01.2024',
        description: 'Укладка плитки на пол и стены.',
        type: VacancyType.LOW,
    },
    {
        companyName: 'ЭлектроМонтаж',
        jobTitle: 'Электрик',
        count: '2',
        location: 'Новосибирск',
        workTime: 'Полный рабочий день',
        salary: '50,000 - 60,000 руб.',
        date: '03.01.2024',
        description: 'Монтаж и ремонт электрических систем.',
        type: VacancyType.LOW,
    },
    {
        companyName: 'КровляПро',
        jobTitle: 'Кровельщик',
        count: '4',
        location: 'Екатеринбург',
        workTime: 'Полный рабочий день',
        salary: '45,000 - 55,000 руб.',
        date: '04.01.2024',
        description: 'Ремонт и установка кровельных покрытий.',
        type: VacancyType.LOW,
    },
    {
        companyName: 'МалярСтрой',
        jobTitle: 'Маляр',
        count: '6',
        location: 'Нижний Новгород',
        workTime: 'Полный рабочий день',
        salary: '40,000 - 50,000 руб.',
        date: '05.01.2024',
        description: 'Покраска стен и потолков.',
        type: VacancyType.LOW,
    },
    {
        companyName: 'ДеревоМастер',
        jobTitle: 'Плотник',
        count: '3',
        location: 'Казань',
        workTime: 'Полный рабочий день',
        salary: '50,000 - 60,000 руб.',
        date: '06.01.2024',
        description: 'Строительство и ремонт деревянных конструкций.',
        type: VacancyType.LOW,
    },
    {
        companyName: 'СантехГрупп',
        jobTitle: 'Сантехник',
        count: '2',
        location: 'Челябинск',
        workTime: 'Полный рабочий день',
        salary: '45,000 - 55,000 руб.',
        date: '07.01.2024',
        description: 'Установка и ремонт водопроводных систем.',
        type: VacancyType.LOW,
    },
    {
        companyName: 'ФасадМастер',
        jobTitle: 'Фасадчик',
        count: '5',
        location: 'Омск',
        workTime: 'Полный рабочий день',
        salary: '40,000 - 50,000 руб.',
        date: '08.01.2024',
        description: 'Ремонт и отделка фасадов зданий.',
        type: VacancyType.LOW,
    },
    {
        companyName: 'СтяжкаПро',
        jobTitle: 'Стяжечник',
        count: '3',
        location: 'Ростов-на-Дону',
        workTime: 'Полный рабочий день',
        salary: '45,000 - 55,000 руб.',
        date: '09.01.2024',
        description: 'Укладка стяжек пола.',
        type: VacancyType.LOW,
    },
    {
        companyName: 'ШтукатурМастер',
        jobTitle: 'Штукатур',
        count: '4',
        location: 'Уфа',
        workTime: 'Полный рабочий день',
        salary: '50,000 - 60,000 руб.',
        date: '10.01.2024',
        description: 'Нанесение штукатурных слоев и отделочные работы.',
        type: VacancyType.LOW,
    },
    {
        companyName: 'TechSolutions',
        jobTitle: 'Senior Software Engineer',
        count: '3',
        location: 'Москва',
        workTime: 'Полный рабочий день',
        salary: '200,000 - 250,000 руб.',
        date: '01.01.2024',
        description: 'Разработка высоконагруженных систем, работа с микросервисами.',
        type: VacancyType.HIGH,
    },
    {
        companyName: 'DataPro',
        jobTitle: 'Data Scientist',
        count: '2',
        location: 'Санкт-Петербург',
        workTime: 'Полный рабочий день',
        salary: '180,000 - 230,000 руб.',
        date: '02.01.2024',
        description: 'Анализ данных, построение моделей машинного обучения.',
        type: VacancyType.HIGH,
    },
    {
        companyName: 'FinTech Group',
        jobTitle: 'Financial Analyst',
        count: '1',
        location: 'Новосибирск',
        workTime: 'Полный рабочий день',
        salary: '150,000 - 200,000 руб.',
        date: '03.01.2024',
        description: 'Финансовый анализ, подготовка отчетов и прогнозов.',
        type: VacancyType.HIGH,
    },
    {
        companyName: 'Marketing Experts',
        jobTitle: 'Marketing Director',
        count: '1',
        location: 'Екатеринбург',
        workTime: 'Полный рабочий день',
        salary: '220,000 - 270,000 руб.',
        date: '04.01.2024',
        description: 'Разработка маркетинговых стратегий, руководство командой маркетологов.',
        type: VacancyType.HIGH,
    },
    {
        companyName: 'IT Innovations',
        jobTitle: 'DevOps Engineer',
        count: '2',
        location: 'Нижний Новгород',
        workTime: 'Полный рабочий день',
        salary: '180,000 - 230,000 руб.',
        date: '05.01.2024',
        description: 'Автоматизация процессов разработки и деплоя.',
        type: VacancyType.HIGH,
    },
    {
        companyName: 'Healthcare Solutions',
        jobTitle: 'Medical Doctor',
        count: '3',
        location: 'Казань',
        workTime: 'Полный рабочий день',
        salary: '250,000 - 300,000 руб.',
        date: '06.01.2024',
        description: 'Оказание медицинской помощи, проведение диагностики и лечения.',
        type: VacancyType.HIGH,
    },
    {
        companyName: 'Architectural Bureau',
        jobTitle: 'Architect',
        count: '1',
        location: 'Челябинск',
        workTime: 'Полный рабочий день',
        salary: '200,000 - 250,000 руб.',
        date: '07.01.2024',
        description: 'Проектирование зданий и сооружений, создание архитектурных проектов.',
        type: VacancyType.HIGH,
    },
    {
        companyName: 'Legal Firm',
        jobTitle: 'Lawyer',
        count: '2',
        location: 'Омск',
        workTime: 'Полный рабочий день',
        salary: '150,000 - 200,000 руб.',
        date: '08.01.2024',
        description: 'Предоставление юридических услуг, представление интересов клиентов в суде.',
        type: VacancyType.HIGH,
    },
    {
        companyName: 'Education Center',
        jobTitle: 'Professor',
        count: '1',
        location: 'Ростов-на-Дону',
        workTime: 'Полный рабочий день',
        salary: '180,000 - 230,000 руб.',
        date: '09.01.2024',
        description: 'Преподавание в высшем учебном заведении, проведение научных исследований.',
        type: VacancyType.HIGH,
    },
    {
        companyName: 'Finance Group',
        jobTitle: 'Investment Banker',
        count: '1',
        location: 'Уфа',
        workTime: 'Полный рабочий день',
        salary: '250,000 - 300,000 руб',
        date: '10.01.2024',
        description: 'Консультирование клиентов по вопросам инвестиций, проведение финансовых операций.',
        type: VacancyType.HIGH,
    },
];
const ITEMS_PER_PAGE = 10;

export const VacancyPage = () => {
    const options = [
        { value: VacancyType.LOW, label: 'Низкоквалифицированная работа' },
        { value: VacancyType.HIGH, label: 'Высококвалифицированная работа' },
    ];

    const [selectedOptions, setSelectedOptions] = useState<{ value: VacancyType; label: string }[]>([]);
    const [filteredVacancies, setFilteredVacancies] = useState<IVacancy[]>(vacancies);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if (selectedOptions.length === 0) {
            setFilteredVacancies(vacancies);
        } else {
            setFilteredVacancies(
                vacancies.filter((vacancy) =>
                    selectedOptions.some((option) => vacancy.type === option.value),
                ),
            );
        }
        setCurrentPage(1); // Сбрасываем на первую страницу при изменении фильтров
    }, [selectedOptions]);

    const totalPages = Math.ceil(filteredVacancies.length / ITEMS_PER_PAGE);

    const currentVacancies = filteredVacancies.slice(
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
        <div className={cls.wrapper}>
            <div className={cls.info}>
                <Text.Heading
                    size={SizeEnum.H6}
                    color={ColorEnum.TEXT}
                    weight={WeightEnum.BLACK}
                >
                    {filteredVacancies.length} вакансий
                </Text.Heading>
                <Select
                    onChange={(val) => {
                        setSelectedOptions(val as { value: VacancyType; label: string }[]);
                    }}
                    placeholder="Фильтр"
                    isMulti={true}
                    options={options}
                />
            </div>
            <VacancyList vacancies={currentVacancies} />
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
