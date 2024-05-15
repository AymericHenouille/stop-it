import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Sub routes for the auth page.
 */
const ROUTES: Routes = [

];

/**
 * The auth routing module.
 */
@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
