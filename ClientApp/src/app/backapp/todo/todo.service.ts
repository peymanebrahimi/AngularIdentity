import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from "./todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getAllTodos(){

  }

  deleteTodoDetail(id){

  }

  updateTodo(){

  }

  toggleTodoComplete(todo: Todo){
    // let updatedTodo = this.updateTodoById(todo.id, {
    //   complete: !todo.complete
    // });
    // return updatedTodo;
  }
}
