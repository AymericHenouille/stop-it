import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { SigninPageComponent } from './components/signin-page/signin-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';

/**
 * Sub routes for the auth page.
 */
const ROUTES: Routes = [
   {
    path: '',
    component: AuthPageComponent,
    children: [
      {
        path: 'signin',
        component: SigninPageComponent,
      },
      {
        path: 'signup',
        component: SignupPageComponent,
      },
      { path: '', redirectTo: 'signin', pathMatch: 'full' },
    ],
  },
];

/**
 * The auth routing module.
 */
@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
