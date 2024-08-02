import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { BorderEnum, ColorEnum, SizeEnum } from '@shared/lib';
import { UseFormRegisterReturn } from 'react-hook-form';

export interface IInputProps extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'size' | 'onChange'
> {
    label: string;
    size?: SizeEnum;
    borderColor?: ColorEnum;
    bgColor?: ColorEnum;
    color?: ColorEnum.BLACK | ColorEnum.WHITE | ColorEnum.TEXT;
    border?: BorderEnum;
    value: string;
    name?: string;
    register?: UseFormRegisterReturn<string>;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}