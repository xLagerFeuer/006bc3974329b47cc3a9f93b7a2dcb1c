import cls from './MyPage.module.scss';
import { ChangeEvent, useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Button, Input, Text } from '@shared/ui';
import { BorderEnum, classNames, ColorEnum, SizeEnum, useAppSelector } from '@shared/lib';
import { selectUser } from '@entities/user';


export interface IFormChange {
    img: Blob | File | null | string;
    firstName: string
    lastName: string
    middleName: string
    email: string,
    tg: string,
    phone: string,
    oldPassword: string
    newPassword: string,
    repeatNewPassword: string,
}

export const MyPage = () => {
    const [img, setImg] = useState<File | null>();
    const user = useAppSelector(selectUser);
    const {
        register,
        handleSubmit,
        control,
        reset,
        watch,
        setValue,
        getValues,
        formState: { errors },
    }
        = useForm<IFormChange>({
        defaultValues: {
            firstName: user?.firstName,
            middleName: '',
            lastName: user?.lastName,
            email: user?.email,
            tg: '',
            phone: '',
            oldPassword: '',
            newPassword: '',
            repeatNewPassword: '',
        },
    });

    useEffect(() => {
        if (user) {
            console.log(user);
            setValue('firstName', user.firstName);
            setValue('lastName', user.lastName);
            setValue('email', user.email);
        }
    }, [user]);

    const firstName = register('firstName');
    const middleName = register('middleName');
    const lastName = register('lastName');
    const email = register('email');
    const tg = register('tg');
    const phone = register('phone');
    const oldPassword = register('oldPassword', {
        required: {
            value: true,
            message: 'Обязательно введите старый пароль',
        },
    });
    const newPassword = register('newPassword', {
        minLength: {
            value: 6,
            message: 'Пароль должен содержать как минимум 6 символов',
        },
        maxLength: {
            value: 20,
            message: 'Пароль должен содержать не более 20 символов',
        },
    });
    const repeatNewPassword = register('repeatNewPassword', {
        validate: (value: string) => {
            if (watch('oldPassword') !== value) {
                return 'Пароли не совпадают';
            }
        },
    });

    const submit: SubmitHandler<IFormChange> = (data: IFormChange) => {
        const formData = new FormData();
        for (const [key, value] of Object.entries(data)) {
            formData.set(key, value);
        }
        if (img) {
            formData.set('img', img);
        }
    };


    const handleReset = () => {
        setImg(null);
        reset({
            img: '',
            firstName: '',
            lastName: '',
            middleName: '',
            email: '',
            oldPassword: '',
            newPassword: '',
            repeatNewPassword: '',
        });
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            const imageTypeRegex = /^image\//;
            if (imageTypeRegex.test(file.type)) {
                setImg(file);
                // setValue("img", file);
            } else {
                setImg(null);
                // setValue("img", null);
                toast.error('Выберите файл изображения');
            }
        }
    };


    return (
        <form onSubmit={handleSubmit(submit)} className={cls.form}>
            <div className={cls.mainInfo}>
                <div className={cls.avatar}>
                    {getValues('img') ? (
                        <img
                            src={`
                                    ${import.meta.env.VITE_SERVER_FILES}/user/$}`} alt="" />
                    ) : img ? (
                        <img src={URL.createObjectURL(img)} alt="" />
                    ) : (
                        <Text.Heading
                            color={ColorEnum.TEXT}
                            size={SizeEnum.H6}
                        >
                            T
                        </Text.Heading>
                    )}
                    <input
                        onChange={handleFileChange}
                        className={cls.avatarFile} type="file" />
                </div>
                <div className={cls.info}>
                    <Text.Heading
                        color={ColorEnum.TEXT}
                        size={SizeEnum.H6}
                    >
                        Основная информация
                    </Text.Heading>
                    <Controller
                        name="firstName"
                        control={control}
                        render={({ field }) => (
                            <div className={cls.wrapper}>
                                <Input
                                    className={classNames('', {
                                        [cls.errorInput]: errors.firstName !== undefined,
                                    }, [])}
                                    type="text"
                                    label="Имя"
                                    value={field.value}
                                    border={BorderEnum.H5}
                                    onChange={field.onChange}
                                    color={ColorEnum.TEXT}
                                    bgColor={ColorEnum.TEXT}
                                    size={SizeEnum.H2}
                                    name="firstName"
                                    register={firstName}
                                />
                                {errors.firstName &&
                                    <Text.Paragraph
                                        className={cls.error}
                                        color={ColorEnum.TEXT}
                                        size={SizeEnum.H2}>{errors.firstName.message}</Text.Paragraph>}
                            </div>
                        )}
                    />
                    <Controller
                        name="lastName"
                        control={control}
                        render={({ field }) => (
                            <div className={cls.wrapper}>
                                <Input
                                    className={classNames('', {
                                        [cls.errorInput]: errors.lastName !== undefined,
                                    }, [])}
                                    type="text"
                                    label="Фамилия"
                                    value={field.value}
                                    border={BorderEnum.H5}
                                    onChange={field.onChange}
                                    color={ColorEnum.TEXT}
                                    bgColor={ColorEnum.TEXT}
                                    size={SizeEnum.H2}
                                    name="lastName"
                                    register={lastName}
                                />
                                {errors.lastName &&
                                    <Text.Paragraph
                                        className={cls.error}
                                        color={ColorEnum.TEXT}
                                        size={SizeEnum.H2}>{errors.lastName.message}</Text.Paragraph>}
                            </div>
                        )}
                    />
                    <Controller
                        name="middleName"
                        control={control}
                        render={({ field }) => (
                            <div className={cls.wrapper}>
                                <Input
                                    className={classNames('', {
                                        [cls.errorInput]: errors.middleName !== undefined,
                                    }, [])}
                                    type="text"
                                    label="Отчество"
                                    value={field.value}
                                    border={BorderEnum.H5}
                                    onChange={field.onChange}
                                    color={ColorEnum.TEXT}
                                    bgColor={ColorEnum.TEXT}
                                    size={SizeEnum.H2}
                                    name="middleName"
                                    register={middleName}
                                />
                                {errors.middleName &&
                                    <Text.Paragraph
                                        className={cls.error}
                                        color={ColorEnum.TEXT}
                                        size={SizeEnum.H2}>{errors.middleName.message}</Text.Paragraph>}
                            </div>
                        )}
                    />
                </div>
            </div>
            <div className={cls.additionalInfo}>
                <Text.Heading
                    color={ColorEnum.TEXT}
                    size={SizeEnum.H6}
                >
                    Рабочая информация
                </Text.Heading>
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                        <div className={cls.wrapper}>
                            <Input
                                className={classNames('', {
                                    [cls.errorInput]: errors.email !== undefined,
                                }, [])}
                                type="text"
                                label="Почта"
                                value={field.value}
                                border={BorderEnum.H5}
                                autoComplete="off"
                                onChange={field.onChange}
                                color={ColorEnum.TEXT}
                                bgColor={ColorEnum.TEXT}
                                size={SizeEnum.H2}
                                name="username"
                                register={email}
                            />
                            {errors.email &&
                                <Text.Paragraph
                                    className={cls.error}
                                    color={ColorEnum.TEXT}
                                    size={SizeEnum.H2}>{errors.email.message}</Text.Paragraph>}
                        </div>
                    )}
                />
                <Controller
                    name="tg"
                    control={control}
                    render={({ field }) => (
                        <div className={cls.wrapper}>
                            <Input
                                className={classNames('', {
                                    [cls.errorInput]: errors.tg !== undefined,
                                }, [])}
                                type="text"
                                label="Телеграм"
                                value={field.value}
                                border={BorderEnum.H5}
                                autoComplete="off"
                                onChange={field.onChange}
                                color={ColorEnum.TEXT}
                                bgColor={ColorEnum.TEXT}
                                size={SizeEnum.H2}
                                name="tg"
                                register={tg}
                            />
                            {errors.tg &&
                                <Text.Paragraph
                                    className={cls.error}
                                    color={ColorEnum.TEXT}
                                    size={SizeEnum.H2}>{errors.tg.message}</Text.Paragraph>}
                        </div>
                    )}
                />
                <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                        <div className={cls.wrapper}>
                            <Input
                                className={classNames('', {
                                    [cls.errorInput]: errors.phone !== undefined,
                                }, [])}
                                type="text"
                                label="Телефон"
                                value={field.value}
                                border={BorderEnum.H5}
                                autoComplete="off"
                                onChange={field.onChange}
                                color={ColorEnum.TEXT}
                                bgColor={ColorEnum.TEXT}
                                size={SizeEnum.H2}
                                name="phone"
                                register={phone}
                            />
                            {errors.phone &&
                                <Text.Paragraph
                                    className={cls.error}
                                    color={ColorEnum.TEXT}
                                    size={SizeEnum.H2}>{errors.phone.message}</Text.Paragraph>}
                        </div>
                    )}
                />
            </div>
            <div className={cls.passwords}>
                <Text.Heading
                    color={ColorEnum.TEXT}
                    size={SizeEnum.H6}
                >
                    Пароли
                </Text.Heading>
                <Controller
                    name="oldPassword"
                    control={control}
                    render={({ field }) => (
                        <div className={cls.wrapper}>
                            <Input
                                className={classNames('', {
                                    [cls.errorInput]: errors.oldPassword !== undefined,
                                }, [])}
                                type="password"
                                label="Старый пароль"
                                autoComplete="off"
                                value={field.value}
                                border={BorderEnum.H5}
                                onChange={field.onChange}
                                color={ColorEnum.TEXT}
                                bgColor={ColorEnum.TEXT}
                                size={SizeEnum.H2}
                                name="oldPassword"
                                register={oldPassword}
                            />
                            {errors.oldPassword &&
                                <Text.Paragraph
                                    className={cls.error}
                                    color={ColorEnum.TEXT}
                                    size={SizeEnum.H2}>{errors.oldPassword.message}</Text.Paragraph>}
                        </div>
                    )}
                />
                <Controller
                    name="newPassword"
                    control={control}
                    render={({ field }) => (
                        <div className={cls.wrapper}>
                            <Input
                                className={classNames('', {
                                    [cls.errorInput]: errors.newPassword !== undefined,
                                }, [])}
                                type="password"
                                label="Новый пароль"
                                autoComplete="off"
                                value={field.value}
                                border={BorderEnum.H5}
                                onChange={field.onChange}
                                color={ColorEnum.TEXT}
                                bgColor={ColorEnum.TEXT}
                                size={SizeEnum.H2}
                                name="newPassword"
                                register={newPassword}
                            />
                            {errors.newPassword &&
                                <Text.Paragraph
                                    className={cls.error}
                                    color={ColorEnum.TEXT}
                                    size={SizeEnum.H2}>{errors.newPassword.message}</Text.Paragraph>}
                        </div>
                    )}
                />

                <Controller
                    name="repeatNewPassword"
                    control={control}
                    render={({ field }) => (
                        <div className={cls.wrapper}>
                            <Input
                                className={classNames('', {
                                    [cls.errorInput]: errors.repeatNewPassword !== undefined,
                                }, [])}
                                type="password"
                                label="Повторите пароль"
                                autoComplete="off"
                                value={field.value}
                                border={BorderEnum.H5}
                                onChange={field.onChange}
                                color={ColorEnum.TEXT}
                                bgColor={ColorEnum.TEXT}
                                size={SizeEnum.H2}
                                name="repeatNewPassword"
                                register={repeatNewPassword}
                            />
                            {errors.repeatNewPassword &&
                                <Text.Paragraph
                                    className={cls.error}
                                    color={ColorEnum.TEXT}
                                    size={SizeEnum.H2}>{errors.repeatNewPassword.message}</Text.Paragraph>}
                        </div>
                    )}
                />

            </div>
            <div className={cls.buttons}>
                <Button
                    className={cls.button}

                    border={BorderEnum.H5}
                    type="submit"
                    color={ColorEnum.WHITE}
                    bgColor={ColorEnum.PRIMARY}
                    size={SizeEnum.H3}>
                    Отправить
                </Button>
                <Button
                    border={BorderEnum.H5}
                    className={cls.button}
                    type="button"
                    color={ColorEnum.WHITE}
                    bgColor={ColorEnum.DANGER}
                    size={SizeEnum.H3}
                    // onClick={handleReset}
                >
                    Очистить
                </Button>
            </div>
        </form>
    );
};