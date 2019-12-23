/**
 * @file reducer
 */

// Using to control stage

import freeze from "deep-freeze";
import { handleActions } from "redux-actions";
import * as actions from "./actions";
import _ from "lodash";

export const name = "HistoryPage";

const initialState = freeze({
  historyStock: []
});

export default handleActions({
  [actions.fetchDataSuccess]: (state, action) => {
    return freeze({
      ...state,
      historyStock: action.payload.data,
    })
  },
}, initialState);
