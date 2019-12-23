import { initialState } from "./reducers";
import { name } from "./reducers";
import _ from "lodash";

export const getUsername = (state) => {
  return state[name].username
}

export const getPassword = (state) => {
  return state[name].password 
}