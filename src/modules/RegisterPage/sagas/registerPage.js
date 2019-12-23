import { call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as actions from '../actions';
import * as authAPI from 'api/auth';
import { takeAction } from 'services/forkActionSagas';

export function* handleRegister(action) {
  try {
    let res = yield call(authAPI.register, action.payload);
    yield put (actions.registerSuccess(res.data));
  } catch (err) {
    yield put (actions.registerFail(err));
  }
}

export function* register() {
  yield takeAction(actions.register, handleRegister)
}

export default {
  register,
};