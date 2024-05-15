import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';


/**
 * The home module of the app.
 */
@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
