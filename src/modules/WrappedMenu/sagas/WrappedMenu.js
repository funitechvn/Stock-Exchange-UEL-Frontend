import { call, put } from "redux-saga/effects";
import { eventChannel } from 'redux-saga';
import * as actions from "../actions";
import * as actionsHomepage from "../../HomePage/actions";
import { takeAction } from "services/forkActionSagas";
import { clearAll } from "services/localStoredService";
import { push } from "react-router-redux";
import io from 'socket.io-client';
import config from "config";
import _ from "lodash";
import store from 'store';
import { camelizeKeys } from "services/convert";

const socketServer = `${config.socketServer}`;
const allowedOrigins = `${config.allowedOrigins}`
const user = store.get('user');
const userId = _.get(user, "_id");
// wrapping functions for socket events (connect, disconnect, reconnect)
let socket = io(socketServer, {
  origins: allowedOrigins
});

const receive = () => {
  return new Promise((resolve, reject) => {
    socket.on(`updateWaitingTrading-${userId}`, (data) => {
      return resolve({
        data,
        type: "updateWaitingTrading"
      })
    })
    socket.on('updateDataStock', (data) => {
      return resolve({
        data,
        type: "updateDataStock"
      });
    });
    socket.on(`updateUserInfo-${userId}`, (data) => {
      return resolve({
        data,
        type: "updateUserInfo"
      })
    })
  })
};


export function* handleLogout(action) {
  try {
    clearAll();
    // let res = yield call(wrappedMenuAPI.logout);
    yield put(push("/login"));
    yield put(actions.logoutSuccess());
  } catch (err) {}
}

export function* listenActionSocket() {
  while(true) {
    let res = yield call(receive);
    let data = camelizeKeys(_.get(res, "data", {}))
    switch (_.get(res, "type")) {
      case "updateDataStock":
        yield put(actionsHomepage.updateStocks(data))
        break;
      case "updateWaitingTrading":
        yield put(actionsHomepage.clearWaiting());
        yield put(actionsHomepage.updateTrading(data));
        break;
      case "updateUserInfo":
        yield put(actionsHomepage.updateUserInfo(data));
        break;
      default:
        break;
    }
  }
}

export function* logout() {
  yield takeAction(actions.logout, handleLogout);
}

export default {
  logout,
  listenActionSocket
};
