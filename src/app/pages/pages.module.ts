import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../features/session/guards/auth.guard';
import { SessionModule } from '../features/session/session.module';

/**
 * The root routes of the app module.
 */
const ROUTES: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'home',  loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard(['/auth'])] },
  { path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/not-found' },
];

/**
 * The pages module for the app.
 */
@NgModule({
  imports: [
    SessionModule,
    RouterModule.forRoot(ROUTES, {
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class PagesModule { }
