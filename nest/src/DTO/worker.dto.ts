// worker.dto.ts
import { IsString, IsDate } from 'class-validator';

export class CreateWorkerDto {
    @IsString()
    img: string;

    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsString()
    email: string;

    @IsString()
    phone: string;

    @IsString()
    telegram: string;

    @IsString()
    whatsapp: string;

    @IsString()
    position: string;

    @IsString()
    about: string;

    @IsString()
    experience: string;

    @IsDate()
    date: Date;
}

export class UpdateWorkerDto extends CreateWorkerDto {}