import { Provider, Role, User } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class UserResponseDto implements User {
    email: string;
    username: string;
    img: string;

    @Exclude()
    id: string;

    about: string;
    city: string;
    sex: string;
    @Exclude()
    password: string;

    @Exclude()
    roles: Role[];

    @Exclude()
    provider: Provider;

    @Exclude()
    createdAt: Date;

    @Exclude()
    updatedAt: Date;

    constructor(user: User) {
        Object.assign(this, user);
    }
}
