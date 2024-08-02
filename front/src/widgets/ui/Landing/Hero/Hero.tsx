import cls from './Hero.module.scss';
import { Container, Navbar } from '@widgets/ui';
import { Text } from '@shared/ui';
import { ColorEnum, FontFamilyEnum, SizeEnum, WeightEnum } from '@shared/lib';

export const Hero = () => {
    return (
        <section className={cls.wrapper}>
            <img src="/hero.png" className={cls.img} />
            <Container className={cls.container}>
                <Navbar />
                <div className={cls.text}>
                    <Text.Heading
                        className={cls.title}
                        size={SizeEnum.H1}
                        fontFamily={FontFamilyEnum.SECOND}
                        weight={WeightEnum.BOLD}
                        color={ColorEnum.SECONDARY}
                    >
                        РАБО
                        <span className="stroke">
                            ЧИЕ&nbsp;
                        </span>
                        РУКИ
                    </Text.Heading>
                </div>
            </Container>
        </section>
    );
};
