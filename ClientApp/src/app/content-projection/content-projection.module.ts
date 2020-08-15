import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentProjectionRoutingModule } from './content-projection-routing.module';
import { NgContentComponent } from './ng-content/ng-content.component';
import { ContenthomeComponent } from './contenthome/contenthome.component';
import { CourseCard1Component } from './course-card1/course-card1.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [NgContentComponent, ContenthomeComponent, CourseCard1Component],
  imports: [
    CommonModule,
    MaterialModule,
    ContentProjectionRoutingModule
  ]
})
export class ContentProjectionModule { }
