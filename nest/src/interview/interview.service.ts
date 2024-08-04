import { Injectable } from '@nestjs/common';
import { CreateInterviewDto, UpdateInterviewDto } from '../DTO/interview.dto';
import { PrismaService } from '@prisma/prisma.service';

@Injectable()
export class InterviewService {
    constructor(private prisma: PrismaService) {}

    create(createInterviewDto: CreateInterviewDto) {
        return this.prisma.interview.create({ data: createInterviewDto });
    }

    findAll() {
        return this.prisma.interview.findMany();
    }

    findOne(id: string) {
        return this.prisma.interview.findUnique({ where: { id } });
    }

    update(id: string, updateInterviewDto: UpdateInterviewDto) {
        return this.prisma.interview.update({
            where: { id },
            data: updateInterviewDto,
        });
    }

    remove(id: string) {
        return this.prisma.interview.delete({ where: { id } });
    }
}
