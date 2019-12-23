import { call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as actions from '../actions';
import * as actionsWrappedMenu from "modules/WrappedMenu/actions";
import * as wrappedMenuAPI from 'api/wrappedMenu';
import { takeAction } from 'services/forkActionSagas';
import { save, clearAll } from "services/localStoredService"

export function* handleLogin(action) {
  try {
    let res = yield call(wrappedMenuAPI.authorize, action.payload.data);
    const { user, token } = res.data.data;
    save('token', token);
    save('user', user);
    yield put (actions.loginSuccess(res.data));
    yield put (actionsWrappedMenu.loginSuccess(res.data));
    yield put(push('/'))
  } catch (err) {
    yield put(actions.loginFail());
  }
}

export function* handleLogout(action) {
  try {
    clearAll();
    let res = yield call(wrappedMenuAPI.logout);
    push('/')
    yield put(actions.logoutSuccess())
  } catch (err) {

  }
}

export function* login() {
  yield takeAction(actions.login, handleLogin)
}

export function* logout() {
  yield takeAction(actions.logout, handleLogout)
}

export default {
  login,
  logout
};