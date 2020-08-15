import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'ContentProjection',
    loadChildren: () => import('./content-projection/content-projection.module').then(x => x.ContentProjectionModule)
  },
  {
    path: 'ngTemplate',
    loadChildren: () => import('./templates/templates.module').then(x => x.TemplatesModule)
  },
  {
    path: 'reactive',
    loadChildren: () => import('./reactive/reactive.module').then(x => x.ReactiveModule)
  },
  {
    path: 'backapp',
    loadChildren: () => import('./backapp/backapp.module').then(x => x.BackappModule)
  },

  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
