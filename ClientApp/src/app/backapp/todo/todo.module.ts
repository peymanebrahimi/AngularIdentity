import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
