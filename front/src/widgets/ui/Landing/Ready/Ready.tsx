import cls from './Ready.module.scss';
import { Button, Text } from '@shared/ui';
import { BorderEnum, ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';
import { Container } from '@widgets/ui';

export const Ready = () => {
    return (
        <div className={cls.wrapper}>
            <Container>
                <Text.Heading
                    className={cls.title}
                    size={SizeEnum.H1}
                    color={ColorEnum.TEXT}
                    weight={WeightEnum.EXTRABOLD}
                >
                    Готовы найти идеальную работу?
                </Text.Heading>
                <div className={cls.body}>
                    <div className={cls.img}>
                        <img src="/about/1.png" alt="" />
                        <img src="/about/2.png" alt="" />
                        <img src="/about/3.png" alt="" />
                    </div>
                    <div className={cls.info}>
                        <Text.Paragraph
                            size={SizeEnum.H1}
                            className={cls.text}
                            color={ColorEnum.TEXT}
                            weight={WeightEnum.NORMAL}
                        >
                            Присоединяйтесь к тысячам работников, которые успешно нашли работу с Рабочими Руками
                        </Text.Paragraph>
                        <Button
                            size={SizeEnum.H1}
                            color={ColorEnum.WHITE}
                            bgColor={ColorEnum.PRIMARY}
                            weight={WeightEnum.EXTRABOLD}
                            border={BorderEnum.H1}
                        >
                            Зарегистрироваться сейчас
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

