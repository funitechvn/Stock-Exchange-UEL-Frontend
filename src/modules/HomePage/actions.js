/**
 * @file All actions will be listed here
 */

import { createAction } from 'redux-actions';
import * as CONST from './constants';

export const fetchDataDashboard = createAction(CONST.FETCH_DATA_DASHBOARD);
export const fetchDataDashboardSuccess = createAction(CONST.FETCH_DATA_DASHBOARD_SUCCESS);

export const handleInputDatlenhChange = createAction(CONST.HANDLE_INPUT_DATLENH_CHANGE);
export const handleChangeLoaiDatLenh = createAction(CONST.HANDLE_CHANGE_LOAI_DATLENH);

export const updateStocks = createAction(CONST.UPDATE_STOCKS);

export const tradingCreate = createAction(CONST.TRADING_CREATE);
export const tradingCreateSuccess = createAction(CONST.TRADING_CREATE_SUCCESS);
export const tradingCreateFail = createAction(CONST.TRADING_CREATE_FAIL);

export const clearWaiting = createAction(CONST.CLEAR_WAITING);
export const updateTrading = createAction(CONST.UPDATE_TRADING);

export const updateUserInfo = createAction(CONST.UPDATE_USER_INFO)