import { Controller, Get, Post, Put, Delete, Body, Param, Req, Res } from '@nestjs/common';

import { TasksService } from './tasks.service'
import { CreateTaskDto } from './dto/create-task.dto'
import TaskProps from './interfaces/TaskProps'
import { Task } from './schemas/task.schema';

@Controller('tasks')
export class TasksController {
    constructor(private readonly taskService: TasksService) { }

    @Get()
    getTasks(): Promise<Task[]> {
        return this.taskService.getAll()
    }

    @Get('/:taskId')
    getTask(@Param('taskId') taskId: string): Promise<Task> {
        return this.taskService.getOne(taskId)
    }

    @Post()
    createTask(@Body() task: CreateTaskDto): Promise<CreateTaskDto> {
        return this.taskService.create(task)
    }

    @Put('/:taskId')
    updateTask(@Body() task: CreateTaskDto, @Param('taskId') taskId: string): Promise<Task> {
        return this.taskService.update(taskId, task)
    }

    @Delete('/:taskId')
    deleteTask(@Param('taskId') taskId): void {
        this.taskService.delete(taskId)
    }
}
