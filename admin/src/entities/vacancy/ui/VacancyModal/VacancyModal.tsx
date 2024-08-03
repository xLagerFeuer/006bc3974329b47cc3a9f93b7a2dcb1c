import cls from './VacancyModal.module.scss';
import Close from '@assets/icons/close.svg';
import { useEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { BorderEnum, classNames, ColorEnum, SizeEnum } from '@shared/lib';
import { IVacancy, VacancyType } from '@entities/vacancy';
import { Button, Input, Select } from '@shared/ui';
import { Text } from '@shared/ui';

interface IVacancyModal {
    isOpen: boolean;
    changeOpenHandler: () => void;
}

const templates = {
    builder: {
        companyName: 'СтройМастер',
        jobTitle: 'Строитель',
        location: 'Москва',
        workTime: 'Полный день',
        salary: '50000',
        experience: '3 года',
        description: 'Строительство жилых и коммерческих зданий',
    },
    tiler: {
        companyName: 'ОтделкаПро',
        jobTitle: 'Плиточник',
        location: 'Санкт-Петербург',
        workTime: 'Полный день',
        salary: '45000',
        experience: '2 года',
        description: 'Укладка плитки в жилых и коммерческих помещениях',
    },
};

export const VacancyModal = ({ isOpen, changeOpenHandler }: IVacancyModal) => {
    const options = [
        { value: VacancyType.LOW, label: 'Низкоквалифицированная работа' },
        { value: VacancyType.HIGH, label: 'Высококвалифицированная работа' },
    ];
    const templateOptions = [
        { value: 'builder', label: 'Строитель' },
        { value: 'tiler', label: 'Плиточник' },
    ];
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedTemplate, setSelectedTemplate] = useState(null);

    const wrapperRef = useRef<HTMLDivElement>(null);
    const handleWrapperClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === wrapperRef.current) {
            changeOpenHandler();
        }
    };

    const { register, handleSubmit, formState: { errors }, control, setValue, reset } = useForm<IVacancy>({
        defaultValues: {
            companyName: '',
            jobTitle: '',
            location: '',
            workTime: '',
            salary: '',
            experience: '',
            description: '',
        },
    });
    const companyName = register('companyName', {
        required: 'Поле обязательно',
    });
    const jobTitle = register('jobTitle', {
        required: 'Поле обязательно',
    });
    const location = register('location', {
        required: 'Поле обязательно',
    });
    const workTime = register('workTime', {
        required: 'Поле обязательно',
    });
    const salary = register('salary', {
        required: 'Поле обязательно',
    });
    const experience = register('experience', {
        required: 'Поле обязательно',
    });
    const description = register('description', {
        required: 'Поле обязательно',
    });


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

    useEffect(() => {
        if (selectedTemplate && setValue) {
            const templateData = templates[selectedTemplate];
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            for (const key in templateData) {
                setValue(key as keyof IVacancy, templateData[key]);
            }
        }
    }, [selectedTemplate, setValue]);

    const onSubmit = (data: IVacancy) => {
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
                <div className={cls.select}>
                    <Select
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-expect-error
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        placeholder="Категория"
                        options={options}
                    />
                    <Select
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-expect-error
                        defaultValue={selectedTemplate}
                        onChange={(val) => {
                            setSelectedTemplate(val.value);
                        }}
                        placeholder="Шаблон вакансии"
                        options={templateOptions}
                    />
                </div>
                <div onClick={() => changeOpenHandler()} className={cls.close}>
                    <Close />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className={cls.form}>
                    <div className={cls.info}>
                        <div className={cls.someInfo}>
                            <div className={cls.inputWrapper}>
                                <Controller
                                    name="companyName"
                                    control={control}
                                    render={({ field: { value, onChange } }) => (
                                        <Input
                                            className={classNames('', {
                                                [cls.errorInput]: errors.companyName !== undefined,
                                            }, [])}
                                            type="text"
                                            label="Название компании"
                                            value={value}
                                            onChange={onChange}
                                            size={SizeEnum.H3}
                                            color={ColorEnum.TEXT}
                                            bgColor={ColorEnum.TEXT}
                                            border={BorderEnum.H6}
                                            name="companyName"
                                            register={companyName}
                                        />
                                    )}
                                />
                                {errors.companyName && (
                                    <Text.Paragraph className={cls.error} size={SizeEnum.H4}>
                                        {errors.companyName.message}
                                    </Text.Paragraph>
                                )}
                            </div>
                            <div className={cls.inputWrapper}>
                                <Controller
                                    name="jobTitle"
                                    control={control}
                                    render={({ field: { value, onChange } }) => (
                                        <Input
                                            className={classNames('', {
                                                [cls.errorInput]: errors.jobTitle !== undefined,
                                            }, [])}
                                            type="text"
                                            label="Должность"
                                            value={value}
                                            onChange={onChange}
                                            size={SizeEnum.H3}
                                            color={ColorEnum.TEXT}
                                            bgColor={ColorEnum.TEXT}
                                            border={BorderEnum.H6}
                                            name="jobTitle"
                                            register={jobTitle}
                                        />
                                    )}
                                />
                                {errors.jobTitle && (
                                    <Text.Paragraph className={cls.error} size={SizeEnum.H4}>
                                        {errors.jobTitle.message}
                                    </Text.Paragraph>
                                )}
                            </div>
                            <div className={cls.inputWrapper}>
                                <Controller
                                    name="location"
                                    control={control}
                                    render={({ field: { value, onChange } }) => (
                                        <Input
                                            className={classNames('', {
                                                [cls.errorInput]: errors.location !== undefined,
                                            }, [])}
                                            type="text"
                                            label="Местоположение"
                                            value={value}
                                            onChange={onChange}
                                            size={SizeEnum.H3}
                                            color={ColorEnum.TEXT}
                                            bgColor={ColorEnum.TEXT}
                                            border={BorderEnum.H6}
                                            name="location"
                                            register={location}
                                        />
                                    )}
                                />
                                {errors.location && (
                                    <Text.Paragraph className={cls.error} size={SizeEnum.H4}>
                                        {errors.location.message}
                                    </Text.Paragraph>
                                )}
                            </div>
                            <div className={cls.inputWrapper}>
                                <Controller
                                    name="workTime"
                                    control={control}
                                    render={({ field: { value, onChange } }) => (
                                        <Input
                                            className={classNames('', {
                                                [cls.errorInput]: errors.workTime !== undefined,
                                            }, [])}
                                            type="text"
                                            label="Рабочее время"
                                            value={value}
                                            onChange={onChange}
                                            size={SizeEnum.H3}
                                            color={ColorEnum.TEXT}
                                            bgColor={ColorEnum.TEXT}
                                            border={BorderEnum.H6}
                                            name="workTime"
                                            register={workTime}
                                        />
                                    )}
                                />
                                {errors.workTime && (
                                    <Text.Paragraph className={cls.error} size={SizeEnum.H4}>
                                        {errors.workTime.message}
                                    </Text.Paragraph>
                                )}
                            </div>
                            <div className={cls.inputWrapper}>
                                <Controller
                                    name="salary"
                                    control={control}
                                    render={({ field: { value, onChange } }) => (
                                        <Input
                                            className={classNames('', {
                                                [cls.errorInput]: errors.salary !== undefined,
                                            }, [])}
                                            type="text"
                                            label="Зарплата"
                                            value={value}
                                            onChange={onChange}
                                            size={SizeEnum.H3}
                                            color={ColorEnum.TEXT}
                                            bgColor={ColorEnum.TEXT}
                                            border={BorderEnum.H6}
                                            name="salary"
                                            register={salary}
                                        />
                                    )}
                                />
                                {errors.salary && (
                                    <Text.Paragraph className={cls.error} size={SizeEnum.H4}>
                                        {errors.salary.message}
                                    </Text.Paragraph>
                                )}
                            </div>
                            <div className={cls.inputWrapper}>
                                <Controller
                                    name="experience"
                                    control={control}
                                    render={({ field: { value, onChange } }) => (
                                        <Input
                                            className={classNames('', {
                                                [cls.errorInput]: errors.experience !== undefined,
                                            }, [])}
                                            type="text"
                                            label="Опыт работы"
                                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                            // @ts-expect-error
                                            value={value}
                                            onChange={onChange}
                                            size={SizeEnum.H3}
                                            color={ColorEnum.TEXT}
                                            bgColor={ColorEnum.TEXT}
                                            border={BorderEnum.H6}
                                            name="experience"
                                            register={experience}
                                        />
                                    )}
                                />
                                {errors.experience && (
                                    <Text.Paragraph className={cls.error} size={SizeEnum.H4}>
                                        {errors.experience.message}
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
                        <div className={cls.buttons}>
                            <Button
                                size={SizeEnum.H2}
                                border={BorderEnum.H4}
                                color={ColorEnum.WHITE}
                                type={'submit'}
                                bgColor={ColorEnum.PRIMARY}
                            >
                                Применить
                            </Button>
                            <Button
                                size={SizeEnum.H2}
                                border={BorderEnum.H4}
                                color={ColorEnum.DANGER}
                                type={'button'}
                                onClick={() => reset()}
                                bgColor={ColorEnum.BG}
                            >
                                Очистить
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
