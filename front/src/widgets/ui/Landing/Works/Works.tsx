import cls from './Works.module.scss';
import { Container, WorksItem } from '@widgets/ui';
import { Text } from '@shared/ui';
import { ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';

export const Works = () => {
    const info = [
        {
            title: 'Зарегистрируйтесь бесплатно',
            description: 'Создайте бесплатную учетную запись за несколько минут.',
        },
        {
            title: 'Создайте резюме',
            description: 'Используйте наш конструктор резюме, чтобы создать профессиональный профиль.',
        },
        {
            title: 'Откликайтесь на вакансии',
            description: 'Просматривайте и откликайтесь на вакансии, которые соответствуют вашим навыкам и предпочтениям.',
        },
        {
            title: 'Получайте предложения',
            description: 'Получайте предложения о работе и начинайте новую карьеру в строительстве.',
        },
    ];
    return (
        <div className={cls.wrapper}>
            <Container
                className={cls.container}
            >
                <Text.Heading
                    className={cls.title}
                    color={ColorEnum.TEXT}
                    weight={WeightEnum.BOLD}
                    size={SizeEnum.H1}
                >
                    Как это работает
                </Text.Heading>
                <ul className={cls.list}>
                    {info.map((info, index) => (
                        <WorksItem index={index + 1} title={info.title} description={info.description} />
                    ))}
                </ul>
            </Container>
        </div>
    );
};

