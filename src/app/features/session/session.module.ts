import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthEffect } from './services/auth.effect';
import { AuthService } from './services/auth.service';

/**
 * The session module.
 */
@NgModule({
  imports: [
    StoreModule.forFeature(),
    EffectsModule.forFeature([AuthEffect]),
  ],
  providers: [
    AuthService,
    AuthEffect,
  ]
})
export class SessionModule { }
