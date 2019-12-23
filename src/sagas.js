/**
 * @file init sagas
 */

import { flatten } from 'lodash/array';
import { values } from 'lodash/object';
import { fork } from 'redux-saga/effects';

// Place for sagas' app
import { sagas as Homepage } from "modules/HomePage";
import { sagas as WrappedMenu } from "modules/WrappedMenu";
import { sagas as LoginPage } from "modules/LoginPage";
import { sagas as HistoryPage } from "modules/HistoryPage";
import { sagas as KeyActivePage } from "modules/KeyActivePage";
import { sagas as RegisterPage } from "modules/RegisterPage";

const sagasList = [
  Homepage,
  WrappedMenu,
  LoginPage,
  HistoryPage,
  KeyActivePage,
  RegisterPage
];

export default function* () {
  yield flatten(sagasList.map(sagas => values(sagas))).map(saga => fork(saga));
};
