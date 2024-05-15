import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * The root routes of the app module.
 */
const ROUTES: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'home',  loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
];

/**
 * The pages module for the app.
 */
@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class PagesModule { }
