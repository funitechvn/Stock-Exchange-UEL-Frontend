/**
 * @file All actions will be listed here
 */

import { createAction } from 'redux-actions';
import * as CONST from './constants';

export const fetchData = createAction(CONST.FETCH_DATA);
export const fetchDataSuccess = createAction(CONST.FETCH_DATA_SUCCESS);
