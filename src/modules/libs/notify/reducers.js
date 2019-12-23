/**
 * @file reducer
 */

// Using to control stage
import freeze from "deep-freeze";
import { handleActions } from "redux-actions";
import * as actions from "./actions";
export const name = "Notify";

export const initialState = {
  message: "",
  isOpen: false,
  type: "error"
};

export default handleActions(
  {
    [actions.showNotify]: (state, action) => {
      return freeze({
        ...state,
        message: action.payload.message,
        type: action.payload.type ? action.payload.type : initialState.type,
        isOpen: true
      })
    },
    [actions.closeNotify]: (state, action) => {
      return freeze({
        ...initialState
      })
    }
  },
  initialState
);
