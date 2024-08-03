import cls from './MainPage.module.scss';
import { Button } from '@shared/ui';
import { BorderEnum, ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';
import { Actions, AllRequests, Request } from '@widgets/ui';
import { WorkerModal } from '@entities/worker';
import { VacancyModal } from '@entities/vacancy';
import { useState } from 'react';

export const MainPage = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const changeModal = () => {
        setIsOpen(prevState => !prevState)
    }
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
                Создать новую вакансию
            </Button>
            <VacancyModal isOpen={isOpen} changeOpenHandler={changeModal} />
            <div className={cls.content}>
                <div className={cls.info}>
                    <div className={cls.body}>
                        <Request />
                        <Actions />
                    </div>
                    <AllRequests />
                </div>
                <WorkerModal />
            </div>
        </div>
    );
};

