import { NgModule } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthApiService } from './services/auth-api.service';
import { AuthEffect } from './services/auth.effect';
import { AuthService } from './services/auth.service';
import { sessionFeature } from './state/session.feature';
import { GOOGLE_AUTH_PROVIDER_TOKEN } from './tokens/provider.token';

/**
 * The session module.
 */
@NgModule({
  imports: [
    StoreModule.forFeature(sessionFeature),
    EffectsModule.forFeature([AuthEffect]),
  ],
  providers: [
    AuthService,
    AuthApiService,
    {
      provide: GOOGLE_AUTH_PROVIDER_TOKEN,
      useFactory: () => new GoogleAuthProvider(),
    },
  ]
})
export class SessionModule { }
