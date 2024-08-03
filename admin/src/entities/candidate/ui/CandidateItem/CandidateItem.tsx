import cls from './CandidateItem.module.scss';
import { Text } from '@shared/ui';
import { ColorEnum, SizeEnum, useAppDispatch, WeightEnum } from '@shared/lib';
import { IWorkerState, setWorkerData } from '@entities/worker';

export const CandidateItem = (
    props: IWorkerState,
) => {
    const dispatch = useAppDispatch();
    const selectWorker = () => {
        dispatch(setWorkerData({
            ...props,
            isOpen: true,
        }));
    };
    return (
        <li
            className={cls.item}
        >
            <div className={cls.title}>
                <img className={cls.img} src={props.img} alt="img" />
                <div className={cls.info}>
                    <Text.Paragraph
                        size={SizeEnum.H1}
                        color={ColorEnum.TEXT}
                        weight={WeightEnum.BLACK}
                    >
                        {props.firstName}
                    </Text.Paragraph>
                    <Text.Paragraph
                        className={cls.opacity}
                        size={SizeEnum.H2}
                        color={ColorEnum.TEXT}
                        weight={WeightEnum.BOLD}
                    >
                        {props.email}
                    </Text.Paragraph>
                </div>
            </div>
            <div className={cls.tools}>
                <Text.Paragraph
                    className={cls.opacity}
                    size={SizeEnum.H2}
                    color={ColorEnum.TEXT}
                    weight={WeightEnum.BOLD}
                >
                    {props.date}
                </Text.Paragraph>
                <Text.Paragraph
                    className={cls.email}
                    size={SizeEnum.H2}
                    color={ColorEnum.DANGER}
                    weight={WeightEnum.BOLD}
                >
                    Удалить
                </Text.Paragraph>
                <Text.Paragraph
                    onClick={selectWorker}
                    className={cls.email}
                    size={SizeEnum.H2}
                    color={ColorEnum.SUCCESS}
                    weight={WeightEnum.BOLD}
                >
                    Назначить интервью
                </Text.Paragraph>
                <Text.Paragraph
                    onClick={selectWorker}
                    className={cls.email}
                    size={SizeEnum.H2}
                    color={ColorEnum.PRIMARY}
                    weight={WeightEnum.BOLD}
                >
                    Посмотреть
                </Text.Paragraph>
            </div>
        </li>
    );
};

