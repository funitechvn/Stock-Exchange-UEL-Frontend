/**
 * @file reducer
 */

// Using to control stage

import freeze from "deep-freeze";
import { handleActions } from "redux-actions";
import * as actions from "./actions";
import _ from "lodash";

export const name = "KeyActivePage";

const initialState = freeze({
    keyActive : {
        isError: false,
    },
    isSuccess: false,
    keyList : [],
});

export default handleActions({
    [actions.handleInputKeyActiveChange]: (state, action) => { 
        let event = action.payload
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        return freeze({
            ...state,
            keyActive: {
                ...state.keyActive,
                isError: false,
                [name]:value,
            }
        })
    },
    [actions.fetchKeySuccess]: (state, action) => {
        return freeze ({
            ...state,
            keyList : action.payload.data,
        })
    },
    [actions.generateKeySuccess]: (state, action) => {
        return freeze ({
            ...state,
            isSuccess: true,
            keyList : action.payload.data
        })
    },
    [actions.generateKeyFail]: (state, action) => {
        return freeze ({
            ...state,
            keyActive : {
                isError: true
            },
        })
    },
}, initialState);
