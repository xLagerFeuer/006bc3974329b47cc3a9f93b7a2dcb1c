import { INavigation } from '@features/navigation';
import { Text } from '@shared/ui';
import { classNames, ColorEnum, FontFamilyEnum, SizeEnum } from '@shared/lib';
import { useLocation } from 'react-router-dom';
import cls from './NavigationItem.module.scss';

export const NavigationItem = (
    {
        icon: Icon, // Renamed for better clarity
        path,
        label,
    }: INavigation) => {
    const { pathname } = useLocation();
    return (
        <li className={classNames(cls.link, {
            [cls.active]: path === pathname,
        }, [])}>
            <Text.Link
                size={SizeEnum.H2}
                fontFamily={FontFamilyEnum.FIRST}
                color={path === pathname ? ColorEnum.PRIMARY : ColorEnum.TEXT}
                to={path}
            >
                <Icon />
                {path === pathname && <span></span>
                }
                {label}
            </Text.Link>
        </li>
    );
};

