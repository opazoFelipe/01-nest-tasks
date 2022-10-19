import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Task, TaskDocument } from './schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto'

@Injectable()
export class TasksService {
    constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

    async getAll(): Promise<Task[]> {
        return await this.taskModel.find()
    }

    async getOne(id: string): Promise<Task> {
        return await this.taskModel.findById(id)
    }

    async create(createTaskDto: CreateTaskDto): Promise<Task> {
        const createdTask = await this.taskModel.create(createTaskDto)
        return createdTask
    }

    async update(taskId: string, createTaskDto: CreateTaskDto): Promise<Task> {
        const updatedTask = await this.taskModel.findByIdAndUpdate(taskId, createTaskDto, { new: true })
        return updatedTask
    }

    async delete(taskId: string): Promise<void> {
        await this.taskModel.findByIdAndDelete(taskId)
    }
}


