import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>,
    ){}

    create(title: string, description: string) {
        const newTask = this.taskRepository.create({title, description});
        this.taskRepository.save(newTask);
    }

    getTasks(): Promise<Task[]> {
        return this.taskRepository.find();
    }

    

    // getTask(id: string): Promise<Task> {
    //     return this.taskRepository.findOneBy({ id });
    // }
}
