import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { Button } from '@shared/ui';
import { BorderEnum, ColorEnum, SizeEnum } from '@shared/lib';


export interface ITab extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    isActive: boolean;
    text: string;
    border: BorderEnum;
    color: ColorEnum;
    bgColor: ColorEnum;
    size: SizeEnum;
}

export const Tab = (
    {
        text,
        color,
        bgColor,
        size,
        border,
        isActive,
        ...props
    }: ITab,
) => {
    return (
        <Button
            bgColor={bgColor}
            color={color}
            size={size}
            border={border}
            {...props}
        >
            {text}
        </Button>
    );
};

