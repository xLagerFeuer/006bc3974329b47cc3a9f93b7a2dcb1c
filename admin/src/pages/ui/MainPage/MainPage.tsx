import cls from './MainPage.module.scss';
import { Button } from '@shared/ui';
import { BorderEnum, ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';
import { Actions, AllRequests, Request } from '@widgets/ui';
import { WorkerModal } from '@entities/worker';

export const MainPage = () => {
    return (
        <div className={cls.wrapper}>
            <Button
                size={SizeEnum.H3}
                color={ColorEnum.WHITE}
                bgColor={ColorEnum.PRIMARY}
                border={BorderEnum.H1}
                weight={WeightEnum.BLACK}
            >
                Создать новую вакансию
            </Button>
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

