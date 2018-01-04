import { Action } from '@ngrx/store';
import { ActionTypes } from './action-types';
import { Authenticate, User } from '../../models/user';

export class Login implements Action {
  readonly type = ActionTypes.LOGIN;
  constructor(public payload: Authenticate) {}
}

export class LoginSuccess implements Action {
  readonly type = ActionTypes.LOGIN_SUCCESS;

  constructor(public payload: { user: User }) {}
}

export class LoginFailure implements Action {
  readonly type = ActionTypes.LOGIN_FAIL;

  constructor(public payload: any) {}
}

export class LoginRedirect implements Action {
  readonly type = ActionTypes.LOGIN_REDIRECT;
}

export class Logout implements Action {
  readonly type = ActionTypes.LOGOUT;
}

export type AuthActions =
  | Login
  | LoginSuccess
  | LoginFailure
  | LoginRedirect
  | Logout;
