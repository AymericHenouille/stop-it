import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { SessionState } from '../models/session-state.model';
import { sessionAction } from './session.action';

/**
 * The initial state of the session.
 */
const INITIAL_STATE: SessionState = {
  user: null,
  ready: false,
};

/**
 * The session reducer.
 */
export const sessionReducer: ActionReducer<SessionState, Action> = createReducer(
  INITIAL_STATE,
  on(sessionAction.loginWithGoogle, (state): SessionState => ({ ...state, ready: false })),
  on(sessionAction.loginSuccess, (state, { user }): SessionState => ({ ...state, user, ready: true })),
  on(sessionAction.logout, (state): SessionState => ({ ...state, ready: false })),
  on(sessionAction.logoutSuccess, sessionAction.loginFailure, (state): SessionState => ({ ...state, user: null, ready: true })),
);
