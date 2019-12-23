/**
 * @file reducer
 */

// Using to control stage


import freeze from 'deep-freeze';
import { handleActions } from 'redux-actions';
import * as actions from './actions';

export const name = 'RegisterPage';

const initialState = freeze({
  userInfo: {
    isErrorUser: false,
  },
  isSuccess: false,
  isError: false,
  errorMess: ""
});

export default handleActions({
  [actions.handleInputChange]: (state, action) => {
    let event = action.payload
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    const emailPattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    if(name === "username") {
      if(emailPattern.test(value)) {
        return freeze({
          ...state,
          userInfo: {
            ...state.userInfo,
            [name]: value,
            isErrorUser: false,
          }
        })
      }
      return freeze({
        ...state,
        userInfo: {
          ...state.userInfo,
          [name]: value,
          isErrorUser: true,
        }
      })
    }
    return freeze({
      ...state,
      userInfo: {
        ...state.userInfo,
        [name]: value,
        isErrorUser: false
      }
    })
  },
  [actions.registerSuccess]: (state, action) => {
    return freeze ({
      ...state,
      isSuccess: true
    })
  },
  [actions.registerFail]: (state, action) => {
    return freeze ({
      ...state,
      isError: true,
      errorMess: action.payload.data
    })
  },
  [actions.clear]: (state, action) => {
    return freeze ({
      ...state,
      userInfo: {
        ...state.userInfo,
        username: "",
        fullname: "",
        activeKey: "",
        isErrorUser: false
      },
      isError: false,
      isSuccess: false
    })
  },
}, initialState);

