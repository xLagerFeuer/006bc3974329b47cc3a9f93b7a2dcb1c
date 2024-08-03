import cls from './CandidatePage.module.scss';
import { Candidate } from '@entities/candidate';
import { WorkerModal } from '@entities/worker';

export const CandidatePage = () => {
    return (
        <div className={cls.wrapper}>
            <Candidate />
            <WorkerModal />
        </div>
    );
};

