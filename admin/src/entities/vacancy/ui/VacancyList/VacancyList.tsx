import cls from './VacancyList.module.scss';
import { IVacancy, VacancyListItem, VacancyType } from '@entities/vacancy';

export const VacancyList = ({ vacancies }: { vacancies: IVacancy[] }) => {

    return (
        <ul className={cls.list}>
            {vacancies.map((item) => (
                <VacancyListItem {...item} />
            ))}
        </ul>
    );
};

