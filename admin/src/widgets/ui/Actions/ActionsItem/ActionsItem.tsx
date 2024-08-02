import cls from './ActionsItem.module.scss';
import { Text } from '@shared/ui';
import { ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';

export interface IActionItem {
    text: string;
    count: string;
    date: string;
}

export const ActionsItem = (
    {
        count,
        date,
        text,
    }: IActionItem) => {
    return (
        <li className={cls.item}>
            <Text.Paragraph
                size={SizeEnum.H2}
                color={ColorEnum.TEXT}
            >
                {text}
            </Text.Paragraph>
            <div className={cls.info}>
                <Text.Paragraph
                    size={SizeEnum.H2}
                    color={ColorEnum.TEXT}
                    weight={WeightEnum.BLACK}
                >
                    {date}
                </Text.Paragraph>
                <Text.Paragraph
                    size={SizeEnum.H1}
                    color={ColorEnum.PRIMARY}
                    weight={WeightEnum.BLACK}
                >
                    {count}
                </Text.Paragraph>

            </div>
        </li>
    );
};

