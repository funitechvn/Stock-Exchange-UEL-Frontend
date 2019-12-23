import { call, put } from "redux-saga/effects";
import * as actions from "../actions";
import * as homepageAPI from "api/homepage";
import { takeAction } from "services/forkActionSagas";
import _ from "lodash";

export function* handleFetchDataDashboard(action) {
  try {
    let res = yield call(homepageAPI.fetchDataDashboard, action.payload);
    yield put(actions.fetchDataDashboardSuccess(res.data))
  } catch (err) {

  }
}

export function* handleTradingCreate(action) {
  try {
    let res = yield call(homepageAPI.tradingCreate, action.payload);
    yield put(actions.tradingCreateSuccess(res.data))
  } catch (err) {
    yield put(actions.tradingCreateFail(err))
  }
}

export function* fetchDataDashboard() {
  yield takeAction(actions.fetchDataDashboard, handleFetchDataDashboard)
}

export function* tradingCreate() {
  yield takeAction(actions.tradingCreate, handleTradingCreate)
}

export default {
  fetchDataDashboard,
  tradingCreate
};
