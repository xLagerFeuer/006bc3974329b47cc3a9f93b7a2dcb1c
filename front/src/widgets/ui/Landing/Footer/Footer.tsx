import cls from './Footer.module.scss';
import { Container } from '@widgets/ui';
import { Text } from '@shared/ui';
import { ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';
import Tw from '@assets/icons/twitter.svg';
import In from '@assets/icons/linkedin.svg';
import Fc from '@assets/icons/facebook.svg';

export const Footer = () => {
    return (
        <div className={cls.wrapper}>
            <Container className={cls.container}>
                <div className={cls.main}>
                    <Text.Heading
                        className={cls.title}
                        size={SizeEnum.H1}
                        color={ColorEnum.TEXT}
                        weight={WeightEnum.EXTRABOLD}
                    >
                        Остались вопросы?
                    </Text.Heading>
                    <Text.Paragraph
                        size={SizeEnum.H1}
                        color={ColorEnum.TEXT}
                        weight={WeightEnum.NORMAL}
                    >
                        Напишите нам на почту
                    </Text.Paragraph>
                    <Text.Link
                        className={cls.link}
                        to="mailto:ttt@mail.ru"
                        size={SizeEnum.H1}
                        color={ColorEnum.BLACK}
                        weight={WeightEnum.EXTRABOLD}
                    >
                        ttt@mail.ru
                    </Text.Link>
                    <Text.Paragraph
                        size={SizeEnum.H1}
                        color={ColorEnum.TEXT}
                        weight={WeightEnum.NORMAL}
                    >
                        Позвоните по телефону
                    </Text.Paragraph>
                    <Text.Link
                        className={cls.link}
                        to="tel:+7(888)777-55-11"
                        size={SizeEnum.H1}
                        color={ColorEnum.BLACK}
                        weight={WeightEnum.EXTRABOLD}
                    >
                        +7(888)777-55-11
                    </Text.Link>
                </div>
                <div className={cls.info}>
                    <div className={cls.links}>
                        <div className={cls.icon}>
                            <Tw />
                        </div>
                        <div className={cls.icon}>
                            <In />
                        </div>
                        <div className={cls.icon}>
                            <Fc />
                        </div>
                    </div>
                    <div className={cls.docs}>
                        <Text.Link
                            to="abobus.ru"
                            size={SizeEnum.H1}
                            color={ColorEnum.BLACK}
                            weight={WeightEnum.NORMAL}
                        >
                            Политика конфиденциальности
                        </Text.Link>
                        <Text.Link
                            to="abobus.ru"
                            size={SizeEnum.H1}
                            color={ColorEnum.BLACK}
                            weight={WeightEnum.NORMAL}
                        >
                            Условия использования
                        </Text.Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

