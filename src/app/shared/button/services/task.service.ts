import { Injectable } from '@angular/core';
import { TaskForm } from 'src/app/form/form.model';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})

export class TaskService {
  private tasks: Array<TaskForm> = [];

  public addTask(task: TaskForm) {
    this.tasks.push(task);
    return this.getTasks();
  }

  public getTasks() {
    return this.tasks;
  }

  public getTask(id: number): Array<TaskForm> {
    return this.tasks.filter(task => task.id === id);
  }

  public updateTask(task: TaskForm): void {
    const index = this.tasks.findIndex(Task => Task.id === task.id);
    this.tasks[index] = task;
  }

  public generatorOptions(amount: number, step: number): Array<number> {
    const options: Array<number> = [];
    for (let i = 0; i < amount + 1; i++) {
      options.push(i * step);
    }
    return options;
  }

  public validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  ///pass new task to array
  public newArr(): Array<any> {
    let arr: Array<any> = [];
    arr = this.tasks;
    return arr
  }

  /// hide form on submit
  public isVisible: boolean = false;

  public hideForm(): boolean {
    return this.isVisible = !this.isVisible
  }

}
