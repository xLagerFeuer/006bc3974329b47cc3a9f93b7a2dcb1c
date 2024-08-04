import { Module } from '@nestjs/common';
import { WorkerService } from './worker.service';
import { WorkerController } from './worker.controller';
import { PrismaModule } from '@prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    providers: [WorkerService],
    controllers: [WorkerController],
    exports: [WorkerService],
})
export class WorkerModule {}
