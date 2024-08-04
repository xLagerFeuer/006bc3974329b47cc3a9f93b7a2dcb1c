import { VacancyType } from '@prisma/client';
import { IsString, IsEnum, IsDate, IsOptional } from 'class-validator';

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

export class UpdateVacancyDto {
    @IsOptional()
    @IsString()
    companyName?: string;

    @IsOptional()
    @IsString()
    jobTitle?: string;

    @IsOptional()
    @IsString()
    count?: string;

    @IsOptional()
    @IsString()
    location?: string;

    @IsOptional()
    @IsString()
    workTime?: string;

    @IsOptional()
    @IsString()
    salary?: string;

    @IsOptional()
    @IsDate()
    date?: Date;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsEnum(VacancyType)
    type?: VacancyType;
}