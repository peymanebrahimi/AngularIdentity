import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { ReactivehomeComponent } from './reactivehome/reactivehome.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConcathomeComponent } from './concathome/concathome.component';
import { MergehomeComponent } from './mergehome/mergehome.component';


@NgModule({
  declarations: [ReactivehomeComponent, ConcathomeComponent, MergehomeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveRoutingModule
  ]
})
export class ReactiveModule { }
