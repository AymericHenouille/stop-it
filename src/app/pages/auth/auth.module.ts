import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

/**
 * The auth module of the app.
 */
@NgModule({
  imports: [
    SharedModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
