import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackappRoutingModule } from './backapp-routing.module';
import { BackapphomeComponent } from './backapphome/backapphome.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BackapphomeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    BackappRoutingModule
  ]
})
export class BackappModule { }
