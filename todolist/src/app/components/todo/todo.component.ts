import { Component, OnInit } from '@angular/core';
import { Itodo } from './todo.interface';
import { StorageService } from '../../shared/storage.services';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todoTasks: Array<Itodo> = [];
  newTodo = '';
  todofilter = '';
  todoId = 0;//this.todoTasks.length;
  buttonClearStorageVisible: boolean = false;
  
  constructor(private storeService: StorageService) { }

  /*private */onSetStoreServiceHandler(): void {
    this.storeService.setTasksData(this.todoTasks);
    //console.log('service were called');
  }

  /*private */onIncrementTodoId(): string {
    this.todoId = this.todoId + 1;

    return this.todoId.toString();