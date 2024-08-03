import cls from './About.module.scss';
import { Button, Text } from '@shared/ui';
import Icon from '@assets/icons/about.svg';
import { BorderEnum, ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';
import { Container } from '@widgets/ui';

export const About = () => {
    return (
        <div className={cls.wrapper}>
            <Container>
                <Text.Heading
                    className={cls.title}
                    size={SizeEnum.H1}
                    color={ColorEnum.TEXT}
                    weight={WeightEnum.EXTRABOLD}
                >
                    Найдите идеальную <Icon /> работу
                    в строительстве за 7 недель!
                </Text.Heading>
                <div className={cls.body}>
                    <div className={cls.info}>
                        <Text.Paragraph
                            size={SizeEnum.H1}
                            className={cls.text}
                            color={ColorEnum.TEXT}
                            weight={WeightEnum.NORMAL}
                        >
                            Ищете лучшую работу в строительстве? Наша платформа гарантирует вам предложения о работе в
                            течение 7 недель. Независимо от того, ищете ли вы полную занятость, частичную или
                            контрактную работу, у нас есть идеальные варианты для вас.
                        </Text.Paragraph>
                        <Button
                            size={SizeEnum.H1}
                            color={ColorEnum.WHITE}
                            bgColor={ColorEnum.PRIMARY}
                            weight={WeightEnum.EXTRABOLD}
                            border={BorderEnum.H1}
                        >
                            Начните сегодня
                        </Button>
                    </div>
                    <div className={cls.img}>
                        <img src="/about/1.png" alt="" />
                        <img src="/about/2.png" alt="" />
                        <img src="/about/3.png" alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

