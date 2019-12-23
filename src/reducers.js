/**
 * @file reducers
 */

import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'

// Place for reducers' app
import Homepage, { name as nameOfHomepage } from "modules/HomePage";
import WrappedMenu, { name as nameOfWrappedMenu } from "modules/WrappedMenu";
import LoginPage, { name as nameOfLoginPage } from "modules/LoginPage";
import RegisterPage, { name as nameOfRegisterPage } from "modules/RegisterPage";
import HistoryPage, { name as nameOfHistoryPage } from "modules/HistoryPage";
import KeyActivePage, { name as nameOfKeyActivePage } from "modules/KeyActivePage";

const reducers = {
  [nameOfHomepage]: Homepage,
  [nameOfWrappedMenu]: WrappedMenu,
  [nameOfLoginPage]: LoginPage,
  [nameOfRegisterPage]: RegisterPage,
  [nameOfHistoryPage]: HistoryPage,
  [nameOfKeyActivePage]: KeyActivePage,
};

export default (history) => combineReducers({
  ...reducers,
  router: connectRouter(history),
});
