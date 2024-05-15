import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';

/**
 * Sub routes for the home page.
 */
const ROUTES: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [

    ],
  },
];

/**
 * The home routing module.
 */
@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
