import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContenthomeComponent } from './contenthome/contenthome.component';
import { NgContentComponent } from './ng-content/ng-content.component';

const routes: Routes = [
  {
    path: '', component: ContenthomeComponent,
    children: [
      { path: 'ngcontent', component: NgContentComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentProjectionRoutingModule { }
