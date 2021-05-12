import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/Tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  listTasks : Task[] = [];
  taskName = '';
  constructor() { }

  ngOnInit(): void {
  }

  addTask():void {
    //Crear una nueva tarea
    const newTask: Task = {
      name: this.taskName,
      state: false,
    };

    //Agregar esa tarea al array
    this.listTasks.push(newTask);

    //resetear el formulario
    this.taskName = '';
  }

  deleteTask(index:number):void{
    this.listTasks.splice(index, 1);
  }

  successTask(task:Task , index:number){
    this.listTasks[index].state = !task.state;
  }
}
