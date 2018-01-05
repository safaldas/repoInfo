import { User } from '../../models/user';
import { AuthActions } from '../actions/action-creators';
import { ActionTypes } from '../actions/action-types';
/*
 * Auth reducer keeps the data of the user in the state
 *  
 */

export interface State {
  user: User | null;
  loggedIn: boolean;
}

export const initialState: State = {
  user: null,
  loggedIn: false
};
/*
 * This reducer sets Login Success and Login Failure
 */

export function authReducer(
  state = initialState,
  action: AuthActions
): State {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        loggedIn: true,
        user: action.payload.user
      };
    }
    case ActionTypes.LOGOUT: {
      return initialState;
    }
    default:
      return state;
  }
}
