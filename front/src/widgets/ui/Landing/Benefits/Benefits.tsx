import cls from './Benefits.module.scss';
import { BenefitItem, Container } from '@widgets/ui';
import { Text } from '@shared/ui';
import { ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';

export const Benefits = () => {
    const info = [
        {
            img: '/benefits/1.png',
            title: 'Создайте профессиональное резюме за минуты',
            description: 'Наш удобный конструктор резюме поможет вам создать резюме, которое привлечет внимание работодателей.',
        },
        {
            img: '/benefits/2.png',
            title: 'Доступ к эксклюзивным вакансиям',
            description: 'Получите доступ к объявлениям о работе от ведущих строительных компаний, ищущих квалифицированных работников.',
        },
        {
            img: '/benefits/3.png',
            title: 'Персонализированные рекомендации по вакансиям',
            description: 'Получайте рекомендации по вакансиям, соответствующим вашим навыкам, опыту и предпочтениям.',
        },
        {
            img: '/benefits/4.png',
            title: 'Гибкие варианты работы',
            description: 'Найдите полную, частичную или контрактную работу, которая подходит вашему расписанию и образу жизни.',
        },
    ];
    return (
        <div className={cls.wrapper}>
            <Container className={cls.container}>
                <ul className={cls.list}>
                    <BenefitItem img={info[0].img} title={info[0].title} description={info[0].description} />
                    <BenefitItem position={false} img={info[1].img} title={info[1].title}
                                 description={info[1].description} />
                </ul>
                <Text.Heading
                    className={cls.title}
                    color={ColorEnum.TEXT}
                    weight={WeightEnum.BOLD}
                    size={SizeEnum.H2}
                >
                    Наши <br/>
                    преимущества
                </Text.Heading>
                <ul className={cls.list}>
                    <BenefitItem img={info[2].img} title={info[2].title} description={info[2].description} />
                    <BenefitItem position={false} img={info[3].img} title={info[3].title}
                                 description={info[3].description} />
                </ul>
            </Container>
        </div>
    );
};

