import cls from './Tooltip.module.scss';
import Icon from '@assets/icons/tooltip.svg';
import { Text } from '@shared/ui';
import { classNames, ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';
import { useState } from 'react';

export interface ITooltip {
    text: string;
}

export const Tooltip = ({ text }: ITooltip) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const handleMouseEnter = () => {
        setIsActive(true);
    };

    const handleMouseLeave = () => {
        setIsActive(false);
    };

    return (
        <div className={cls.wrapper}>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={classNames(cls.icon, {
                    [cls.active]: isActive,
                }, [])}
            >
                <Icon />
            </div>
            <div
                className={classNames(cls.text, {
                    [cls.active]: isActive,
                }, [])}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Text.Paragraph
                    size={SizeEnum.H3}
                    color={ColorEnum.TEXT}
                    weight={WeightEnum.NORMAL}
                >
                    {text}
                </Text.Paragraph>
            </div>
        </div>
    );
};
