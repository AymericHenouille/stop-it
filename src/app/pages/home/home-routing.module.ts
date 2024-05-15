import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Sub routes for the home page.
 */
const ROUTES: Routes = [

];

/**
 * The home routing module.
 */
@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
