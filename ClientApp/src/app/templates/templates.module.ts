import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesRoutingModule } from './templates-routing.module';
import { TemplatehomeComponent } from './templatehome/templatehome.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { MaterialModule } from '../material/material.module';
import { TextColorDirective } from './text-color.directive';
import { HostbindingComponent } from './hostbinding/hostbinding.component';


@NgModule({
  declarations: [TemplatehomeComponent, NgTemplateComponent, TextColorDirective, HostbindingComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TemplatesRoutingModule
  ]
})
export class TemplatesModule { }
