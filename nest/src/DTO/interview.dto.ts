// interview.dto.ts
import { IsString, IsDate } from 'class-validator';

export class CreateInterviewDto {
    @IsString()
    text: string;

    @IsString()
    count: string;

    @IsDate()
    date: Date;
}

export class UpdateInterviewDto extends CreateInterviewDto {}