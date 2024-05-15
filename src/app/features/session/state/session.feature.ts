import { createFeature } from '@ngrx/store';
import { sessionReducer } from './session.reducer';

/**
 * The session feature.
 */
export const sessionFeature = createFeature({
  name: 'session',
  reducer: sessionReducer,
});
