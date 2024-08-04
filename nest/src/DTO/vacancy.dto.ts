// vacancy.dto.ts
import { IsString, IsEnum, IsDate } from 'class-validator';
import { VacancyType } from '../enums/vacancy-type.enum';

export class CreateVacancyDto {
    @IsString()
    companyName: string;

    @IsString()
    jobTitle: string;

    @IsString()
    count: string;

    @IsString()
    location: string;

    @IsString()
    workTime: string;

    @IsString()
    salary: string;

    @IsDate()
    date: Date;

    @IsString()
    description: string;

    @IsEnum(VacancyType)
    type: VacancyType;
}

export class UpdateVacancyDto extends CreateVacancyDto {}