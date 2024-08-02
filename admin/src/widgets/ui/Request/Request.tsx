import cls from './Request.module.scss';
import { Text, Tooltip } from '@shared/ui';
import { ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';
import { Line } from '@ant-design/plots';

export const Request = () => {
    const config = {
        data: {
            type: 'fetch',
            value: 'https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json',
        },
        xField: (d: any) => new Date(d.year),
        yField: 'value',
        sizeField: 'value',
        legend: { size: false },
        colorField: 'category',
    };
    return (
        <div className={cls.wrapper}>
            <div className={cls.info}>
                <Text.Paragraph
                    size={SizeEnum.H2}
                    color={ColorEnum.TEXT}
                    weight={WeightEnum.BOLD}
                >
                    Количество заявок за последний месяц
                </Text.Paragraph>
                <Tooltip text={'aboba'} />
            </div>
            <Line {...config} />
        </div>
    );
};

