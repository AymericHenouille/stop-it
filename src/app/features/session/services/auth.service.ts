import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, concatMap, filter, map } from 'rxjs';
import { AppUser } from '../models/user.model';
import { sessionAction } from '../state/session.action';
import { selectReady, selectUser } from '../state/session.selector';

/**
 * The authentication service.
 */
@Injectable()
export class AuthService {
  /**
   * The user observable.
   *
   * @private
   * @type {(Observable<AppUser | null>)}
   * @memberof AuthService
   */
  private _user$: Observable<AppUser | null> = this.store.select(selectUser);
  /**
   * The ready observable.
   *
   * @private
   * @type {Observable<boolean>}
   * @memberof AuthService
   */
  private _ready$: Observable<boolean> = this.store.select(selectReady);

  /**
   * The logged in user.
   *
   * @type {Observable<AppUser>}
   * @memberof AuthService
   */
  public readonly user$: Observable<AppUser> = this._user$.pipe(
    filter((user): user is AppUser => !!user),
  );

  /**
   * If the user is logged in, this observable will emit true, otherwise false.
   *
   * @type {Observable<boolean>}
   * @memberof AuthService
   */
  public readonly isLoggedIn$: Observable<boolean> = this._ready$.pipe(
    filter((ready) => ready),
    concatMap(() => this._user$.pipe(
      map((user) => !!user),
    )),
  );

  /**
   * Creates an instance of AuthService.
   *
   * @param {Store} store The store.
   * @memberof AuthService
   */
  public constructor(
    private readonly store: Store,
  ) { }

  /**
   * Logs in with Google.
   */
  public loginWithGoogle(): void {
    this.store.dispatch(sessionAction.loginWithGoogle());
  }

  /**
   * Logs out.
   */
  public logout(): void {
    this.store.dispatch(sessionAction.logout());
  }
}
