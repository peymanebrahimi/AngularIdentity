import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplatehomeComponent } from "./templatehome/templatehome.component";
import { NgTemplateComponent } from "./ng-template/ng-template.component";
import { HostbindingComponent } from './hostbinding/hostbinding.component';

const routes: Routes = [
  {
    path: '', component: TemplatehomeComponent,
    children: [
      { path: 'ngtemplate', component: NgTemplateComponent },
      { path: 'hostbinding', component: HostbindingComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatesRoutingModule { }
