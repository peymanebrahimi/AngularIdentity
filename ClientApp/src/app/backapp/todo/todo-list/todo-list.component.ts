import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service'
import { Observable, fromEvent } from 'rxjs';
import { Todo } from '../todo';
import { debounceTime, filter, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, AfterViewInit {

  todos$: Observable<Todo>;
  selectedRow = -1;

  todos: Todo[] = [
    { todoDescription: "c#", userObjectId: "", finished: false },
    { todoDescription: "java", userObjectId: "", finished: true },
    { todoDescription: "book", userObjectId: "", finished: false },
    { todoDescription: "flower", userObjectId: "", finished: false },
  ];

  @ViewChild('input')
  input: ElementRef

  constructor(private router: Router, private todoService: TodoService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        // debounceTime(150),
        filter((e: KeyboardEvent) => e.keyCode === 13),
        filter(() => !!this.input.nativeElement.value),
        distinctUntilChanged(),
        tap(() => {
          console.log(this.input.nativeElement.value);
          const item: Todo = {
            userObjectId: "",
            finished: false,
            todoDescription: this.input.nativeElement.value
          }
          this.todos.push(item);
          this.input.nativeElement.value = "";
        }),
        // tap(() => {

        // })
      )
      .subscribe();
  }

  onClickEditTodoDetail(id) {
    // this.router.navigate(['/todo-detail'], {queryParams:{id:id}});
  }

  onClickAddTodo() {
    // this.router.navigate(['/todo-detail']);
  }

  onClickTodoDelete(id) {
    // this.todoService.deleteTodoDetail(id);
    // this.loadAllTodoList();
  }

  toggleFinished(todo: Todo) {
    todo.finished = !todo.finished;
    console.log(todo);
  }

  removeTodo(todo: Todo) { 

  }

  setIndex(index: number) {
    this.selectedRow = index;
  }
  removeIndex(index: number) {
    this.selectedRow = null;
  }


}
