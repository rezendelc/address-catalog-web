import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Applying Lazy Loading concept in view routes.
// This make data usage more efficient for a bit little of load speed.
// It is usually used to bigger applications, but I prefer to always use it
// for better maintenance and readability.

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
