import cls from './Actions.module.scss';
import { Text, Tooltip } from '@shared/ui';
import { ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';
import { ActionsItem, IActionItem } from '@widgets/ui';

export const Actions = () => {
    const actionItems: IActionItem[] = [
        { text: 'Иван Иванов', count: 'Zoom', date: '01.01.2024 10:00' },
        { text: 'Петр Петров', count: 'Telegram', date: '02.01.2024 11:30' },
        { text: 'Сергей Сергеев', count: 'Google Meets', date: '03.01.2024 14:00' },
        { text: 'Анна Кузнецова', count: 'Skype', date: '04.01.2024 09:45' },
    ];

    return (
        <div className={cls.wrapper}>
            <div className={cls.info}>
                <Text.Paragraph
                    size={SizeEnum.H2}
                    color={ColorEnum.TEXT}
                    weight={WeightEnum.BOLD}
                >
                    График интервью
                </Text.Paragraph>
                <Tooltip text={'aboba 2'} />
            </div>

            <ul className={cls.list}>
                {actionItems.map(action => (
                    <ActionsItem
                        key={action.text}
                        {...action}
                    />
                ))}
            </ul>
        </div>
    );
};

