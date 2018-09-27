import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MatarialUiModule } from './../shared/matarial-ui/matarial-ui.module';
import { Routes, RouterModule } from '@angular/router';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
@NgModule({
  imports: [
    CommonModule,
    MatarialUiModule,
    TodoRoutingModule
  ],
  declarations: [TodoComponent , TodoHeaderComponent, TodoListComponent]
})
export class TodoModule { }
