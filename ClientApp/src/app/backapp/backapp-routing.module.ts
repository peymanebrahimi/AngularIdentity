import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackapphomeComponent } from './backapphome/backapphome.component';

const routes: Routes = [
  {
    path: '', component: BackapphomeComponent,
    children: [
      {
        path: 'todo',
        loadChildren: () => import('./todo/todo.module').then(x => x.TodoModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackappRoutingModule { }
