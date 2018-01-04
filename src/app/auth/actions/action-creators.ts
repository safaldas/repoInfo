import { Action } from '@ngrx/store';
import { ActionTypes } from './action-types';
import { Authenticate } from '../../models/user';
export class Login implements Action {
  readonly type = ActionTypes.LOGIN;
  constructor(public payload: Authenticate) {}
}
