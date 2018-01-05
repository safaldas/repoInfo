import { AuthActions } from './../actions/action-creators';
import { ActionTypes } from './../actions/action-types';
import { fail } from 'assert';

/*
 * interface for the login page state
 * the state has pending and error statuses
 */

export interface State {
  error: string | null;
  pending: boolean;
}
/*
 * Setting the initial state
 */
export const initialState: State = {
  error: null,
  pending: false
};

/*
 * defining the reducer
 */

export function loginReducer(
  state = initialState,
  action: AuthActions
): State {
  switch (action.type) {
    case ActionTypes.LOGIN: {
      return {
        ...state,
        error: null,
        pending: true
      };
    }
    case ActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        error: null,
        pending: false
      };
    }
    case ActionTypes.LOGIN_FAIL: {
      return {
        ...state,
        error: action.payload,
        pending: false
      };
    }
    default: {
      return state;
    }
  }
}
