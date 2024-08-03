import cls from './VacancyListItem.module.scss';
import { IVacancy } from '@entities/vacancy';
import { Button, Text } from '@shared/ui';
import { BorderEnum, ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';

export const VacancyListItem = (
    {
        location,
        salary,
        date,
        count,
        jobTitle,
        workTime,
        description,
        companyName,
    }: IVacancy,
) => {
    return (
        <li className={cls.item}>
            <div className={cls.info}>
                <Text.Paragraph
                    size={SizeEnum.H3}
                    color={ColorEnum.TEXT}
                >
                    {companyName}
                </Text.Paragraph>
                <div className={cls.title}>
                    <Text.Paragraph
                        size={SizeEnum.H1}
                        color={ColorEnum.TEXT}
                        weight={WeightEnum.BOLD}
                    >
                        {jobTitle}
                    </Text.Paragraph>
                    <Text.Paragraph
                        className={cls.count}
                        size={SizeEnum.H3}
                        color={ColorEnum.PRIMARY}
                        weight={WeightEnum.BOLD}
                    >
                        {count} заявок
                    </Text.Paragraph>
                </div>
                <div className={cls.additional}>
                    <Text.Paragraph
                        size={SizeEnum.H3}
                        className={cls.opacity}
                        color={ColorEnum.TEXT}
                    >
                        {location}
                    </Text.Paragraph>
                    <Text.Paragraph
                        size={SizeEnum.H3}
                        className={cls.opacity}
                        color={ColorEnum.TEXT}
                    >
                        {workTime}
                    </Text.Paragraph>
                    <Text.Paragraph
                        size={SizeEnum.H3}
                        className={cls.opacity}
                        color={ColorEnum.TEXT}
                    >
                        {salary}
                    </Text.Paragraph>
                    <Text.Paragraph
                        size={SizeEnum.H3}
                        className={cls.opacity}
                        color={ColorEnum.TEXT}
                    >
                        {date}
                    </Text.Paragraph>
                </div>
                <Text.Paragraph
                    size={SizeEnum.H2}
                    color={ColorEnum.TEXT}
                    weight={WeightEnum.BOLD}
                >
                    {description}
                </Text.Paragraph>
            </div>
            <div className={cls.button}>
                <Button
                    size={SizeEnum.H3}
                    bgColor={ColorEnum.PRIMARY}
                    color={ColorEnum.WHITE}
                    border={BorderEnum.H3}
                >
                    Посмотреть
                </Button>
                <Button
                    size={SizeEnum.H3}
                    bgColor={ColorEnum.BG}
                    color={ColorEnum.PRIMARY}
                    border={BorderEnum.H3}
                >
                    Удалить
                </Button>
            </div>
        </li>
    );
};

