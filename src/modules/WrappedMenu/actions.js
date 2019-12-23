/**
 * @file All actions will be listed here
 */

import { createAction } from 'redux-actions';
import * as CONST from './constants';

export const login = createAction(CONST.LOGIN);
export const loginSuccess = createAction(CONST.LOGIN_SUCCESS);

export const logout = createAction(CONST.LOGOUT);
export const logoutSuccess = createAction(CONST.LOGOUT_SUCCESS);