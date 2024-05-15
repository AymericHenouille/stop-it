import { AppUser } from './user.model';

/**
 * The session state.
 */
export interface SessionState {
  /**
   * The logged in user.
   * If the user is not logged in, this will be `null`.
   * If the user is logged in, this will be the user object.
  */
  user: AppUser | null;
  /**
   * If the session is ready.
   */
  ready: boolean;
}
