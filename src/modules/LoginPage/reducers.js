/**
 * @file reducer
 */

// Using to control stage


import freeze from 'deep-freeze';
import { handleActions } from 'redux-actions';
import * as actions from './actions';
import { get, clearAll } from "services/localStoredService"

export const name = 'LoginPage';

const initialState = freeze({
  userInfo: {},
  isLogined: false,
  isError: false,
  username: "",
  password: "",
});

export default handleActions({
  [actions.clear]: (state, action) => {
    clearAll();
    return freeze({
      ...initialState
    })
  },
  [actions.handleInputChange]: (state, action) => {
    let event = action.payload
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    return freeze({
      ...state,
      isError: false,
      [name]: value
    })
  },
  [actions.loginSuccess]: (state, action) => {
    return freeze({
      ...state,
      ...initialState,
      userInfo: action.payload.data.user,
      isLogined: true
    })
  },
  [actions.logoutSuccess]: (state, action) => {
    return freeze({
      ...initialState
    })
  },
  [actions.getUserInfo]: (state, action) => {
    return freeze({
      ...state,
      userInfo: get("user")
    })
  },
  [actions.loginFail]: (state, action) => {
    return freeze({
      ...state,
      isError: true
    })
  }
}, initialState);

