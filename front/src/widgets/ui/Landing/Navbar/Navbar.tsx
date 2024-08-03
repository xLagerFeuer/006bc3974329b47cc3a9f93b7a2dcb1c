import cls from './Navbar.module.scss';
import { Button, Text } from '@shared/ui';
import { BorderEnum, ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';

export const Navbar = () => {
    const list = [
        {
            label: 'ГЛАВНАЯ',
        },
        {
            label: 'ВОЗМОЖНОСТИ',
        },
        {
            label: 'КОНТАКТЫ',
        },
        {
            label: 'ОТЗЫВЫ',
        },
        {
            label: 'КАК ЭТО РАБОТАЕТ',
        },
    ];
    return (
        <div className={cls.navbar}>
            <ul className={cls.list}>
                {list.map((item) => (
                    <li
                        key={item.label}
                        className={cls.listItem}>
                        <Text.Link
                            color={ColorEnum.BLACK}
                            size={SizeEnum.H2}
                            weight={WeightEnum.EXTRABOLD}
                            to={'/'}
                        >
                            {item.label}
                        </Text.Link>
                    </li>
                ))}
            </ul>
            <div className={cls.button}>
                <Button
                    color={ColorEnum.PRIMARY}
                    size={SizeEnum.H3}
                    bgColor={ColorEnum.BGDARK}
                    border={BorderEnum.H2}
                >
                    ВХОД
                </Button>
                <Button
                    color={ColorEnum.WHITE}
                    size={SizeEnum.H3}
                    bgColor={ColorEnum.PRIMARY}
                    border={BorderEnum.H2}
                >
                    РЕГИСТРАЦИЯ
                </Button>
            </div>
        </div>
    );
};