import cls from './WorkerModal.module.scss';
import { classNames, useAppDispatch, useAppSelector } from '@shared/lib';
import { selectWorker, setWorkerData } from '@entities/worker';
import { Text } from '@shared/ui';
import { SizeEnum, ColorEnum, WeightEnum } from '@shared/lib';
import Close from '@assets/icons/close.svg';

export const WorkerModal = () => {
    const worker = useAppSelector(selectWorker);
    const dispatch = useAppDispatch();
    const onClose = () => {
        dispatch(setWorkerData({
            isOpen: false,
            img: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            telegram: '',
            whatsapp: '',
            position: '',
            about: '',
            experience: '',
            date: '',
        }));
    };
    return (
        <div className={classNames(cls.modal, {
            [cls.hide]: !worker.isOpen,
        }, [])}>
            <div
                onClick={onClose}
                className={cls.close}>
                <Close />
            </div>
            <div className={cls.modalContent}>
                <img src={worker.img} alt={`${worker.firstName} ${worker.lastName}`} className={cls.workerImg} />
                <Text.Heading
                    size={SizeEnum.H5}
                    color={ColorEnum.TEXT}
                    weight={WeightEnum.BOLD}
                >
                    {`${worker.firstName} ${worker.lastName}`}
                </Text.Heading>

                <Text.Heading
                    className={cls.title}
                    size={SizeEnum.H6}
                    color={ColorEnum.TEXT}
                    weight={WeightEnum.BOLD}
                >
                    Общая информация
                </Text.Heading>

                <ul className={cls.list}>
                    <li className={cls.item}>
                        <Text.Paragraph
                            className={cls.label}
                            size={SizeEnum.H2}
                            color={ColorEnum.TEXT}
                            weight={WeightEnum.BOLD}
                        >
                            Имя
                        </Text.Paragraph>
                        <Text.Paragraph
                            size={SizeEnum.H2}
                            color={ColorEnum.TEXT}
                            weight={WeightEnum.BOLD}
                        >
                            {worker.firstName}
                        </Text.Paragraph>
                    </li>
                    <li className={cls.item}>
                        <Text.Paragraph
                            className={cls.label}
                            size={SizeEnum.H2}
                            color={ColorEnum.TEXT}
                            weight={WeightEnum.BOLD}
                        >
                            Фамилия
                        </Text.Paragraph>
                        <Text.Paragraph
                            size={SizeEnum.H2}
                            color={ColorEnum.TEXT}
                            weight={WeightEnum.BOLD}
                        >
                            {worker.lastName}
                        </Text.Paragraph>
                    </li>
                    <li className={cls.item}>
                        <Text.Paragraph
                            className={cls.label}
                            size={SizeEnum.H2}
                            color={ColorEnum.TEXT}
                            weight={WeightEnum.BOLD}
                        >
                            Должность
                        </Text.Paragraph>
                        <Text.Paragraph
                            size={SizeEnum.H2}
                            color={ColorEnum.TEXT}
                            weight={WeightEnum.BOLD}
                        >
                            {worker.position}
                        </Text.Paragraph>
                    </li>
                    <li className={cls.item}>
                        <Text.Paragraph
                            className={cls.label}
                            size={SizeEnum.H2}
                            color={ColorEnum.TEXT}
                            weight={WeightEnum.BOLD}
                        >
                            Email
                        </Text.Paragraph>
                        <Text.Paragraph
                            size={SizeEnum.H2}
                            color={ColorEnum.TEXT}
                            weight={WeightEnum.BOLD}
                        >
                            {worker.email}
                        </Text.Paragraph>
                    </li>
                    <li className={cls.item}>
                        <Text.Paragraph
                            className={cls.label}
                            size={SizeEnum.H2}
                            color={ColorEnum.TEXT}
                            weight={WeightEnum.BOLD}
                        >
                            Телефон
                        </Text.Paragraph>
                        <Text.Paragraph
                            size={SizeEnum.H2}
                            color={ColorEnum.TEXT}
                            weight={WeightEnum.BOLD}
                        >
                            {worker.phone}
                        </Text.Paragraph>
                    </li>
                    <li className={cls.item}>
                        <Text.Paragraph
                            className={cls.label}
                            size={SizeEnum.H2}
                            color={ColorEnum.TEXT}
                            weight={WeightEnum.BOLD}
                        >
                            Telegram
                        </Text.Paragraph>
                        <Text.Paragraph
                            size={SizeEnum.H2}
                            color={ColorEnum.TEXT}
                            weight={WeightEnum.BOLD}
                        >
                            {worker.telegram}
                        </Text.Paragraph>
                    </li>
                    <li className={cls.item}>
                        <Text.Paragraph
                            className={cls.label}
                            size={SizeEnum.H2}
                            color={ColorEnum.TEXT}
                            weight={WeightEnum.BOLD}
                        >
                            WhatsApp
                        </Text.Paragraph>
                        <Text.Paragraph
                            size={SizeEnum.H2}
                            color={ColorEnum.TEXT}
                            weight={WeightEnum.BOLD}
                        >
                            {worker.whatsapp}
                        </Text.Paragraph>
                    </li>
                    <li className={cls.item}>
                        <Text.Paragraph
                            className={cls.label}
                            size={SizeEnum.H2}
                            color={ColorEnum.TEXT}
                            weight={WeightEnum.BOLD}
                        >
                            О себе
                        </Text.Paragraph>
                        <Text.Paragraph
                            size={SizeEnum.H2}
                            color={ColorEnum.TEXT}
                            weight={WeightEnum.BOLD}
                        >
                            {worker.about}
                        </Text.Paragraph>
                    </li>
                    <li className={cls.item}>
                        <Text.Paragraph
                            className={cls.label}
                            size={SizeEnum.H2}
                            color={ColorEnum.TEXT}
                            weight={WeightEnum.BOLD}
                        >
                            Опыт
                        </Text.Paragraph>
                        <Text.Paragraph
                            size={SizeEnum.H2}
                            color={ColorEnum.TEXT}
                            weight={WeightEnum.BOLD}
                        >
                            {worker.experience}
                        </Text.Paragraph>
                    </li>
                </ul>
            </div>
        </div>
    );
};
