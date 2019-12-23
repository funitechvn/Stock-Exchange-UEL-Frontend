import { call, put } from "redux-saga/effects";
import * as actions from "../actions";
import * as API from "api/history";
import { takeAction } from "services/forkActionSagas";
import _ from "lodash";

export function* handleFetchData(action) {
  try {
    let res = yield call(API.fetchData, action.payload);
    yield put(actions.fetchDataSuccess(res.data))
  } catch (err) {

  }
}

export function* fetchData() {
  yield takeAction(actions.fetchData, handleFetchData)
}

export default {
  fetchData,
};
