import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InterviewService } from './interview.service';
import { CreateInterviewDto, UpdateInterviewDto } from '../DTO/interview.dto';

@Controller('interview')
export class InterviewController {
    constructor(private readonly interviewService: InterviewService) {}

    @Post()
    create(@Body() createInterviewDto: CreateInterviewDto) {
        return this.interviewService.create(createInterviewDto);
    }

    @Get()
    findAll() {
        return this.interviewService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.interviewService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateInterviewDto: UpdateInterviewDto) {
        return this.interviewService.update(id, updateInterviewDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.interviewService.remove(id);
    }
}
