import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { UpdateVacancyDto, CreateVacancyDto } from '../DTO/vacancy.dto';

@Injectable()
export class VacancyService {
    constructor(private prisma: PrismaService) {}

    create(createVacancyDto: CreateVacancyDto) {
        return this.prisma.vacancy.create({ data: createVacancyDto });
    }

    findAll() {
        return this.prisma.vacancy.findMany();
    }

    findOne(id: string) {
        return this.prisma.vacancy.findUnique({ where: { id } });
    }

    update(id: string, updateVacancyDto: UpdateVacancyDto) {
        return this.prisma.vacancy.update({
            where: { id },
            data: updateVacancyDto,
        });
    }

    remove(id: string) {
        return this.prisma.vacancy.delete({ where: { id } });
    }
}