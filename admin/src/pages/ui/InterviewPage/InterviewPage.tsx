import cls from './InterviewPage.module.scss';
import { InterviewCalendar, InterviewModal } from '@entities/interview';
import { Button } from '@shared/ui';
import { BorderEnum, ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';
import { useState } from 'react';

export const InterviewPage = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const changeModal = () => {
        setIsOpen(prevState => !prevState);
    };
    return (
        <div className={cls.wrapper}>
            <Button
                onClick={changeModal}
                className={cls.button}
                size={SizeEnum.H3}
                color={ColorEnum.WHITE}
                bgColor={ColorEnum.PRIMARY}
                border={BorderEnum.H1}
                weight={WeightEnum.BLACK}
            >
                Назначить интервью
            </Button>
            <InterviewCalendar />
            <InterviewModal isOpen={isOpen} changeOpenHandler={changeModal} />
        </div>
    );
};

