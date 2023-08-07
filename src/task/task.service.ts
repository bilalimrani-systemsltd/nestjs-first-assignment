import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './interfaces/task.interface';

@Injectable()
export class TaskService {
  private readonly tasks: Task[] = [
    {
      id: 20226,
      title: 'Dummy title',
      description: 'Dummy description',
      status: 'ON',
      dueDate: '25/2/2023',
      createdAt: '20/2/2023',
      updatedAt: '22/2/2023',
    },
  ];

  create(createTaskDto: CreateTaskDto) {
    this.tasks.push(createTaskDto);
    return this.tasks;
  }

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: number) {
    return this.tasks?.find((item: Task) => item?.id === id);
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    const index = this.tasks.findIndex(item => item?.id === id);

    for (const key in updateTaskDto) {
      this.tasks[index][key] = updateTaskDto[key];
    }

    return this.tasks[index];
  }

  remove(id: number) {
    const index = this.tasks.findIndex(item => item?.id === id);

    this.tasks.splice(index, 1);
    return this.tasks;
  }
}
