import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { WorkerService } from './worker.service';
import { CreateWorkerDto, UpdateWorkerDto } from '../DTO/worker.dto';

@Controller('worker')
export class WorkerController {
    constructor(private readonly workerService: WorkerService) {}

    @Post()
    create(@Body() createWorkerDto: CreateWorkerDto) {
        return this.workerService.create(createWorkerDto);
    }

    @Get()
    findAll() {
        return this.workerService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.workerService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateWorkerDto: UpdateWorkerDto) {
        return this.workerService.update(id, updateWorkerDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.workerService.remove(id);
    }
}
