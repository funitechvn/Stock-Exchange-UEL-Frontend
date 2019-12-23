/**
 * @file All actions will be listed here
 */

import { createAction } from 'redux-actions';
import * as CONST from './constants';

export const fetchKey = createAction(CONST.FETCH_KEY);
export const fetchKeySuccess = createAction(CONST.FETCH_KEY_SUCCESS);

export const generateKey = createAction(CONST.GENERATE_KEY);
export const generateKeySuccess = createAction(CONST.GENERATE_KEY_SUCCESS);
export const generateKeyFail = createAction(CONST.GENERATE_KEY_FAIL);

export const handleInputKeyActiveChange = createAction(CONST.HANDLE_INPUT_KEYACTIVE_CHANGE);
