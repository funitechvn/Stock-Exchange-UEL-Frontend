/**
 * @file reducer
 */

// Using to control stage

import freeze from "deep-freeze";
import { handleActions } from "redux-actions";
import * as actions from "./actions";
import _ from "lodash";

export const name = "BoardPage";

const initialState = freeze({
});

export default handleActions({

}, initialState);
