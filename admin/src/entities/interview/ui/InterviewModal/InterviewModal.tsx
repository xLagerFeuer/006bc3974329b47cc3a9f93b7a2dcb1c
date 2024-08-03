import cls from './InterviewModal.module.scss';
import Close from '@assets/icons/close.svg';
import { useEffect, useRef, useState } from 'react';
import { BorderEnum, classNames, ColorEnum, SizeEnum } from '@shared/lib';
import { Button, Input, Select, Text } from '@shared/ui';
import { Controller, useForm } from 'react-hook-form';
import { IInterview } from '@entities/interview';
import Calendar from 'react-calendar';

interface IVacancyModal {
    isOpen: boolean;
    changeOpenHandler: () => void;
}

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export const InterviewModal = ({ isOpen, changeOpenHandler }: IVacancyModal) => {
    const options = [
        { value: 'builder', label: 'Первый абобус' },
        { value: 'tiler', label: 'Второй абобус' },
    ];
    const [value, onChange] = useState<Value>(); // Диапазон дат в августе 2024 года
    const [selectedOption, setSelectedOption] = useState(null);

    const wrapperRef = useRef<HTMLDivElement>(null);
    const handleWrapperClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === wrapperRef.current) {
            changeOpenHandler();
        }
    };
    useEffect(() => {
        const handleEscKeyPress = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                changeOpenHandler();
            }
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscKeyPress);
            document.querySelector('html')!.style.overflowY = 'hidden';
        } else {
            document.removeEventListener('keydown', handleEscKeyPress);
            document.querySelector('html')!.style.overflowY = 'auto';
        }
        return () => {
            document.removeEventListener('keydown', handleEscKeyPress);
        };
    }, [isOpen, changeOpenHandler]);

    const { register, handleSubmit, formState: { errors }, control } = useForm<IInterview>({
        defaultValues: {
            description: '',
            time: '',
        },
    });
    const description = register('description', {
        required: 'Поле обязательно',
    });
    const time = register('time', {
        required: 'Поле обязательно',
    });

    const onSubmit = (data: IInterview) => {
        console.log(data);
    };

    return (
        <div
            ref={wrapperRef}
            onClick={handleWrapperClick}
            className={classNames(cls.wrapper, {
                [cls.hidden]: !isOpen,
            }, [])}>
            <div className={cls.body}>
                <div onClick={() => changeOpenHandler()} className={cls.close}>
                    <Close />
                </div>
                <Select
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    placeholder="Кандидат"
                    options={options}
                />
                <Calendar
                    className={cls.calendar}
                    value={value}
                />
                <form onSubmit={handleSubmit(onSubmit)} className={cls.form}>
                    <div className={cls.info}>
                        <div className={cls.someInfo}>
                            <div className={cls.inputWrapper}>
                                <Controller
                                    name="time"
                                    control={control}
                                    render={({ field: { value, onChange } }) => (
                                        <Input
                                            className={classNames('', {
                                                [cls.errorInput]: errors.time !== undefined,
                                            }, [])}
                                            type="text"
                                            label="Время"
                                            value={value}
                                            onChange={onChange}
                                            size={SizeEnum.H3}
                                            color={ColorEnum.TEXT}
                                            bgColor={ColorEnum.TEXT}
                                            border={BorderEnum.H6}
                                            name="time"
                                            register={time}
                                        />
                                    )}
                                />
                                {errors.time && (
                                    <Text.Paragraph className={cls.error} size={SizeEnum.H4}>
                                        {errors.time.message}
                                    </Text.Paragraph>
                                )}
                            </div>
                            <div className={cls.inputWrapper}>
                                <Controller
                                    name="description"
                                    control={control}
                                    render={({ field: { value, onChange } }) => (
                                        <Input
                                            className={classNames('', {
                                                [cls.errorInput]: errors.description !== undefined,
                                            }, [])}
                                            type="text"
                                            label="Описание"
                                            value={value}
                                            onChange={onChange}
                                            size={SizeEnum.H3}
                                            color={ColorEnum.TEXT}
                                            bgColor={ColorEnum.TEXT}
                                            border={BorderEnum.H6}
                                            name="description"
                                            register={description}
                                        />
                                    )}
                                />
                                {errors.description && (
                                    <Text.Paragraph className={cls.error} size={SizeEnum.H4}>
                                        {errors.description.message}
                                    </Text.Paragraph>
                                )}
                            </div>
                        </div>
                    </div>
                </form>
                <div className={cls.buttons}>
                    <Button
                        size={SizeEnum.H3}
                        border={BorderEnum.H6}
                        color={ColorEnum.WHITE}
                        type={'submit'}
                        bgColor={ColorEnum.PRIMARY}
                    >
                        Отправить
                    </Button>
                    <Button
                        size={SizeEnum.H3}
                        border={BorderEnum.H6}
                        color={ColorEnum.DANGER}
                        type={'button'}
                        bgColor={ColorEnum.BG}
                    >
                        Очистить
                    </Button>
                </div>
            </div>
        </div>
    );
};
