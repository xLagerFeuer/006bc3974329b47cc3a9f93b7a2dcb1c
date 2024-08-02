import cls from './ReviewItem.module.scss';
import { Text } from '@shared/ui';
import { ColorEnum, SizeEnum, WeightEnum } from '@shared/lib';


export interface IReviewItem {
    img: string;
    name: string;
    jobTitle: string;
    review: string;
}

export const ReviewItem = (
    {

        img,
        name,
        jobTitle,
        review,
    }: IReviewItem,
) => {
    return (
        <div className={cls.wrapper}>
            <img className={cls.img} src={img} alt="" />
            <Text.Heading
                className={cls.name}
                color={ColorEnum.TEXT}
                weight={WeightEnum.NORMAL}
                size={SizeEnum.H4}
            >
                {name}
            </Text.Heading>
            <Text.Paragraph
                className={cls.jobTitle}
                color={ColorEnum.PRIMARY}
                weight={WeightEnum.BLACK}
                size={SizeEnum.H1}
            >
                {jobTitle}
            </Text.Paragraph>
            <Text.Paragraph
                className={cls.review}
                color={ColorEnum.TEXT}
                weight={WeightEnum.NORMAL}
                size={SizeEnum.H1}
            >
                {review}
            </Text.Paragraph>
        </div>
    );
};

