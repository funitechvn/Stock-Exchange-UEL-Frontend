/**
 * @file All actions will be listed here
 */

import { createAction } from 'redux-actions';
import * as CONST from './constants';


export const register = createAction(CONST.REGISTER);
export const registerSuccess = createAction(CONST.REGISTER_SUCCESS);
export const registerFail = createAction(CONST.REGISTER_FAIL);

export const handleInputChange = createAction(CONST.HANDLE_INPUT_CHANGE);

export const clear = createAction(CONST.CLEAR);
