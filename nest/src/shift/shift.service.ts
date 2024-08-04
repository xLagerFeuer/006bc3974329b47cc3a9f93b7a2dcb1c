import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { CreateShiftDto, UpdateShiftDto } from '../DTO/shift.dto';

@Injectable()
export class ShiftService {
    constructor(private prisma: PrismaService) {}

    create(createShiftDto: CreateShiftDto) {
        return this.prisma.shift.create({ data: createShiftDto });
    }

    findAll() {
        return this.prisma.shift.findMany();
    }

    findOne(id: string) {
        return this.prisma.shift.findUnique({ where: { id } });
    }

    update(id: string, updateShiftDto: UpdateShiftDto) {
        return this.prisma.shift.update({
            where: { id },
            data: updateShiftDto,
        });
    }

    remove(id: string) {
        return this.prisma.shift.delete({ where: { id } });
    }
}
