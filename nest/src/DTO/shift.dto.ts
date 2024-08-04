// shift.dto.ts
import { IsString, IsDate, IsInt, IsBoolean } from 'class-validator';

export class CreateShiftDto {
    @IsDate()
    start: Date;

    @IsDate()
    end: Date;

    @IsString()
    name: string;

    @IsString()
    id: string;

    @IsInt()
    progress: number;

    @IsString()
    type: string;

    @IsBoolean()
    hideChildren: boolean;

    @IsInt()
    displayOrder: number;
}

export class UpdateShiftDto extends CreateShiftDto {}