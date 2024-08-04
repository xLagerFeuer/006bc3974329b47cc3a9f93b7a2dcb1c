import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { CreateWorkerDto, UpdateWorkerDto } from '../DTO/worker.dto';

@Injectable()
export class WorkerService {
    constructor(private prisma: PrismaService) {}

    create(createWorkerDto: CreateWorkerDto) {
        return this.prisma.worker.create({ data: createWorkerDto });
    }

    findAll() {
        return this.prisma.worker.findMany();
    }

    findOne(id: string) {
        return this.prisma.worker.findUnique({ where: { id } });
    }

    update(id: string, updateWorkerDto: UpdateWorkerDto) {
        return this.prisma.worker.update({
            where: { id },
            data: updateWorkerDto,
        });
    }

    remove(id: string) {
        return this.prisma.worker.delete({ where: { id } });
    }
}
