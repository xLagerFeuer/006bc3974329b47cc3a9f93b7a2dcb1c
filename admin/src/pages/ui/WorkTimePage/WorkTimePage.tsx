import cls from './WorkTimePage.module.scss';
import { WorkTimeTable } from '@entities/workTime/ui/WorkTimeTable';

export const WorkTimePage = () => {
    return (
        <div className={cls.wrapper}>
            <WorkTimeTable />
        </div>
    );
};

