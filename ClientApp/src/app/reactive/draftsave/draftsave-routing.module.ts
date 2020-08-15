import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseHomeComponent } from './course-home/course-home.component';
import { CourseComponent } from './course/course.component';

const routes: Routes = [
  {
    path: "",
    component: CourseHomeComponent

  },
  {
    path: 'courses/:id',
    component: CourseComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DraftsaveRoutingModule { }
