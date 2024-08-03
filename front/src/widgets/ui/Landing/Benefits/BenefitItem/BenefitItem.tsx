import cls from './BenefitItem.module.scss';
import { Text } from '@shared/ui';
import { classNames, ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';


export interface IBenefitItem {
    img: string;
    title: string;
    description: string;
    position?: boolean;
}

export const BenefitItem = (
    {
        img,
        description,
        title,
        position = true,
    }: IBenefitItem,
) => {
    return (
        <li className={classNames(cls.wrapper, {
            [cls.left]: position,
            [cls.right]: !position,
        }, [])}>
            <img src={img} alt="abobus" />
            <div className={cls.list}>
                <Text.Heading
                    className={cls.title}
                    color={ColorEnum.TEXT}
                    weight={WeightEnum.BOLD}
                    size={SizeEnum.H2}
                >
                    {title}
                </Text.Heading>
                <Text.Paragraph
                    className={cls.description}
                    color={ColorEnum.TEXT}
                    weight={WeightEnum.NORMAL}
                    size={SizeEnum.H2}
                >
                    {description}
                </Text.Paragraph>
            </div>
        </li>
    );
};

