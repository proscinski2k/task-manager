import { Controller, Get, Post, Body } from '@nestjs/common';
import CreateTaskDto  from './dtos/create-task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) {}
    @Get()
    getTasks() {
        return [{
            "test":"api",
        }];
    }

    @Post()
    createTask(@Body() body: CreateTaskDto) {
        this.taskService.create(body.title, body.description);
    }
}

