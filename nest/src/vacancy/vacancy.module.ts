import { Module } from '@nestjs/common';
import { VacancyService } from './vacancy.service';
import { VacancyController } from './vacancy.controller';
import { PrismaModule } from '@prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    providers: [VacancyService],
    controllers: [VacancyController],
    exports: [VacancyService],
})
export class VacancyModule {}
