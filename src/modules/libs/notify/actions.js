import { createAction } from "redux-actions";
import * as CONST from "./constants";

export const showNotify = createAction(CONST.SHOW_NOTIFY);
export const closeNotify = createAction(CONST.CLOSE_NOTIFY);