import cls from './Reviews.module.scss';
import { Text } from '@shared/ui';
import { ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';
import { Container } from '@widgets/ui';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { IReviewItem, ReviewItem } from '@widgets/ui/Landing/Reviews/ReviewItem';


export const Reviews = () => {
    const info: IReviewItem[] = [
        {
            'img': '/reviews/1.png',
            'name': 'Иван',
            'jobTitle': 'Менеджер проекта',
            'review': 'Отличный сервис! Рабочие руки всегда выполняют задачи быстро и качественно.',
        },
        {
            'img': '/reviews/2.png',
            'name': 'Анна',
            'jobTitle': 'Бухгалтер',
            'review': 'Очень доволен работой! Профессионализм на высоте и сроки всегда соблюдаются.',
        },
        {
            'img': '/reviews/3.png',
            'name': 'Олег',
            'jobTitle': 'Разработчик',
            'review': 'Рабочие руки помогли в сложной ситуации, их помощь была неоценима. Рекомендую!',
        },
        {
            'img': '/reviews/4.png',
            'name': 'Мария',
            'jobTitle': 'Дизайнер',
            'review': 'Сервис превзошел все ожидания! Вежливые и квалифицированные сотрудники.',
        },
        {
            'img': '/reviews/5.png',
            'name': 'Алексей',
            'jobTitle': 'Аналитик',
            'review': 'Очень качественная работа. Проект был выполнен в срок и с отличным результатом.',
        },
        {
            'img': '/reviews/6.png',
            'name': 'Елена',
            'jobTitle': 'HR-менеджер',
            'review': 'Работа была выполнена на высшем уровне. Приятно работать с профессионалами.',
        },
        {
            'img': '/reviews/7.png',
            'name': 'Дмитрий',
            'jobTitle': 'Маркетолог',
            'review': 'Сервис показал себя с лучшей стороны. Все задачи выполнены без задержек и претензий.',
        },
        {
            'img': '/reviews/8.png',
            'name': 'Кристина',
            'jobTitle': 'Копирайтер',
            'review': 'Очень рада сотрудничеству. Все пожелания были учтены и реализованы в лучшем виде.',
        },
        {
            'img': '/reviews/9.png',
            'name': 'Роман',
            'jobTitle': 'Проектировщик',
            'review': 'Отличное качество работы и внимание к деталям. Приятно работать с такой командой.',
        },
        {
            'img': '/reviews/10.png',
            'name': 'Татьяна',
            'jobTitle': 'Юрист',
            'review': 'Рекомендую этот сервис всем! Быстро, качественно и по разумной цене. Профессиональный подход.',
        },
    ];

    return (
        <div
            className={cls.wrapper}
        >
            <Container className={cls.container}>
                <Text.Heading
                    className={cls.title}
                    color={ColorEnum.TEXT}
                    weight={WeightEnum.BOLD}
                    size={SizeEnum.H1}
                >
                    Отзывы
                </Text.Heading>
                <Swiper
                    slidesPerView={3}
                    modules={[Navigation, Autoplay]}
                    navigation={true}
                    spaceBetween={20}
                    autoplay={{
                        delay: 5000,
                    }}
                    pagination={{ clickable: true }}
                >
                    {info.map((item) => (
                        <SwiperSlide key={item.img}>
                            <ReviewItem {...item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </div>
    );
};

