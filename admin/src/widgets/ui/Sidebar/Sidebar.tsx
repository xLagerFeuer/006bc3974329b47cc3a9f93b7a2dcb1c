import cls from './Sidebar.module.scss';
import { Text, ThemeSwitcher } from '@shared/ui';
import Tab from '@assets/icons/tab.svg';
import { NavigationList } from '@features/navigation';
import { classNames, ColorEnum, SizeEnum, useAppDispatch, useAppSelector, WeightEnum } from '@shared/lib';
import { selectSidebar, toggleSidebar } from '@features/events';
import { selectUser } from '@entities/user';

export const Sidebar = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUser);
    const isOpen = useAppSelector(selectSidebar);
    return (
        <div className={classNames(cls.wrapper, {
            [cls.hide]: !isOpen,
        }, [])}>
            <div className={classNames(cls.user, {
                [cls.hide]: !isOpen,
            }, [])}>
                <div className={cls.img}></div>
                <Text.Link
                    to="/me"
                    className={cls.info}>
                    <Text.Paragraph
                        size={SizeEnum.H3}
                        color={ColorEnum.TEXT}
                        weight={WeightEnum.NORMAL}
                    >
                        {user.firstName ? user.firstName : "Имя не введено"}
                    </Text.Paragraph>
                    <Text.Paragraph
                        size={SizeEnum.H3}
                        color={ColorEnum.TEXT}
                        className={cls.opacity}
                        weight={WeightEnum.BOLD}
                    >
                        abobus@gmail.com
                    </Text.Paragraph>
                </Text.Link>
            </div>
            <NavigationList />
            <div className={classNames(cls.buttons, {
                [cls.hide]: !isOpen,
            }, [])}>
                <ThemeSwitcher />
                <div
                    onClick={() => {
                        dispatch(toggleSidebar());
                    }}
                    className={cls.tab}>
                    <Tab />
                </div>
            </div>
        </div>
    );
};

