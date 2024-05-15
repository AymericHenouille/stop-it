import { Injectable } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs';
import { AppUser } from '../models/user.model';
import { sessionAction } from '../state/session.action';
import { AuthApiService } from './auth-api.service';

/**
 * The authentication effect.
 */
@Injectable()
export class AuthEffect {
  /**
   * The effect that listens for the user.
   *
   * @memberof AuthEffect
   */
  public userEffect$ = createEffect(() => {
    return this.authApiService.user$.pipe(
      map((user: User | null) => {
        if (!user) return sessionAction.loginFailure();
        const appUser: AppUser = {
          id: user.uid,
          name: user.displayName ?? 'Unknown',
          picture: user.photoURL
        };
        return sessionAction.loginSuccess({ user: appUser });
      }),
    );
  });

  /**
   * The effect that logs in with Google.
   *
   * @memberof AuthEffect
   */
  public loginWithGoogleEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(sessionAction.loginWithGoogle),
      concatMap(() => this.authApiService.loginWithGoogle()),
    );
  }, { dispatch: false });

  /**
   * The effect that logs out.
   *
   * @memberof AuthEffect
   */
  public logoutEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(sessionAction.logout),
      concatMap(() => this.authApiService.logout()),
      map(() => sessionAction.logoutSuccess()),
    );
  });

  /**
   * The effect that redirects after the login success.
   *
   * @memberof AuthEffect
   */
  public redirectAfterLoginSuccessEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(sessionAction.loginSuccess, sessionAction.logoutSuccess),
      concatMap(() => this.router.navigate(['/'])),
    );
  }, { dispatch: false });

  /**
   * The effect that redirects after the logout success.
   *
   * @memberof AuthEffect
   */
  public redirectAfterLogoutSuccessEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(sessionAction.logoutSuccess),
      concatMap(() => this.router.navigate(['/auth'])),
    );
  }, { dispatch: false });

  /**
   * Initializes the authentication effect.
   * @param authApiService The authentication API service.
   * @param actions$ The actions.
   */
  public constructor(
    private readonly authApiService: AuthApiService,
    private readonly actions$: Actions,
    private readonly router: Router,
  ) { }
}
