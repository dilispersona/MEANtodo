import { Component, OnInit } from '@angular/core';
import {TodoService} from '../services/todo.service';
import 'rxjs/add/operator/map';
import {Todo} from '../Todo';

@Component({
  moduleId:module.id,
  selector: 'todos',
  templateUrl: 'todos.component.html'
})

export class TodosComponent implements OnInit{ 
  todos: Todo[];
  
  constructor(private _todoService:TodoService){
    
  }
  
  ngOnInit(){
    this.todos = [];
    this._todoService.getTodos()
      .map(res => res.json())
      .subscribe(todos => this.todos = todos)
  }
}