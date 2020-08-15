import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactivehomeComponent } from './reactivehome/reactivehome.component';
import { ConcathomeComponent } from './concathome/concathome.component';
import { MergehomeComponent } from './mergehome/mergehome.component';

const routes: Routes = [
  {
    path: '', component: ReactivehomeComponent,
    children: [
      { path: 'draftsave', loadChildren: () => import('./draftsave/draftsave.module').then(x => x.DraftsaveModule) },
      { path: 'concat', component: ConcathomeComponent },
      { path: 'merge', component: MergehomeComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }
