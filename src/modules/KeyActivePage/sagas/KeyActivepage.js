import { call, put, takeEvery, all } from "redux-saga/effects";
import * as actions from "../actions";
import { takeAction } from "services/forkActionSagas";
import * as keyactivepageAPI from "api/keyactivepage";
import _ from "lodash";

export function* handleFetchKey(action) {
    try {
        let res = yield call(keyactivepageAPI.fetchActiveKey, action.payload);
        yield put(actions.fetchKeySuccess(res.data))
    } catch (err) {

    }
}

export function* handleGenerateKey(action) {
    try {
        let res = yield call(keyactivepageAPI.generateKey, action.payload);
        yield put (actions.generateKeySuccess(res.data))
    } catch (err) {
        yield put(actions.generateKeyFail(err))
        
    }
}

export function* fetchKey() {
    yield takeAction(actions.fetchKey, handleFetchKey)
  }
export function* generateKey() {
    yield takeAction(actions.generateKey, handleGenerateKey)
}

export default {
    fetchKey,
    generateKey
};
