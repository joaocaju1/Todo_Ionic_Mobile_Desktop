import { Component } from '@angular/core';

interface Task {
  description: string;
  notes: string;
  completed: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tasks: Task[] = [];
  newTask: string = '';
  newTaskDescription: string = '';

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({ description: this.newTask, notes: this.newTaskDescription, completed: false });
      this.newTask = '';
      this.newTaskDescription = '';
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
