import { useState } from 'react';
import Calendar from 'react-calendar';
import cls from './InterviewCalendar.module.scss';
import { Text } from '@shared/ui';
import { ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export const InterviewCalendar = () => {
    const [value, onChange] = useState<Value>([new Date(2024, 7, 1), new Date(2024, 7, 7)]); // Диапазон дат в августе 2024 года
    return (
        <div className={cls.wrapper}>
            <Text.Paragraph
                size={SizeEnum.H2}
                color={ColorEnum.TEXT}
                weight={WeightEnum.BOLD}
            >
                Календарь интервью
            </Text.Paragraph>
            <Calendar
                className={cls.calendar}
                value={value}
            />
        </div>
    );
};
