import cls from './WorksItem.module.scss';
import { ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';
import { Text } from '@shared/ui';

export interface IWorksItem {
    index: number;
    title: string;
    description: string;
}

export const WorksItem = (
    {
        description,
        title,
        index,
    }: IWorksItem,
) => {
    return (
        <li className={cls.wrapper}>
            <Text.Heading
                className={cls.title}
                color={ColorEnum.WHITE}
                weight={WeightEnum.BOLD}
                size={SizeEnum.H1}
            >
                {title}
            </Text.Heading>
            <div className={cls.info}>
                <div className={cls.round}>
                    <Text.Heading
                        className={cls.index}
                        color={ColorEnum.PRIMARY}
                        weight={WeightEnum.BLACK}
                        size={SizeEnum.H1}
                    >
                        {index}
                    </Text.Heading>
                </div>
                <Text.Paragraph
                    className={cls.description}
                    color={ColorEnum.WHITE}
                    weight={WeightEnum.BOLD}
                    size={SizeEnum.H1}
                >
                    {description}
                </Text.Paragraph>
            </div>
        </li>
    );
};

