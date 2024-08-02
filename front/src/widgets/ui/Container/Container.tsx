import cls from './Container.module.scss';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@shared/lib';


interface Container extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
}

export const Container = ({ children, className, ...props }: Container) => {
    return (
        <div
            className={classNames(cls.container, {}, [className])}
            {...props}
        >
            {children}
        </div>
    );
};

