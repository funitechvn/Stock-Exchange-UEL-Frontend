/**
 * @file All actions will be listed here
 */

import { createAction } from 'redux-actions';
import * as CONST from './constants';

export const login = createAction(CONST.LOGIN);
export const loginSuccess = createAction(CONST.LOGIN_SUCCESS);
export const loginFail = createAction(CONST.LOGIN_FAIL);

export const logout = createAction(CONST.LOGOUT);
export const logoutSuccess = createAction(CONST.LOGOUT_SUCCESS);

export const handleInputChange = createAction(CONST.HANDLE_INPUT_CHANGE);

export const getUserInfo = createAction(CONST.GET_USER_INFO);
export const clear = createAction(CONST.CLEAR);