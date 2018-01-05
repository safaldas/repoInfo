import { authReducer } from './auth-reducer';
import { loginReducer } from './loginpage-reducer';
export const reducers = {
  status: authReducer,
  loginPage: loginReducer
};
