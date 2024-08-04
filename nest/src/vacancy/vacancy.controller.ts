import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { VacancyService } from './vacancy.service';
import { CreateVacancyDto, UpdateVacancyDto } from '../DTO/vacancy.dto';

@Controller('vacancy')
export class VacancyController {
    constructor(private readonly vacancyService: VacancyService) {}

    @Post()
    create(@Body() createVacancyDto: CreateVacancyDto) {
        return this.vacancyService.create(createVacancyDto);
    }

    @Get()
    findAll() {
        return this.vacancyService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.vacancyService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateVacancyDto: UpdateVacancyDto) {
        return this.vacancyService.update(id, updateVacancyDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.vacancyService.remove(id);
    }
}
