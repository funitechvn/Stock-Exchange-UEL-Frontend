/**
 * @file reducer
 */

// Using to control stage

import freeze from "deep-freeze";
import { handleActions } from "redux-actions";
import * as actions from "./actions";
import _ from "lodash";
import { isFulfilled } from "q";

export const name = "Homepage";

const initialState = freeze({
  dashboard: {
    user: {},
    totalStock: 0,
    stocks: []
  },
  matchedPriceEditable: true,
  datlenh: {
    isError: false,
    errorMess: "",
    priceStep: false,
    quantity: false
  },
  waitingTrading: {
    sell: [],
    buy: []
  }
});

export default handleActions({
  [actions.fetchDataDashboardSuccess]: (state, action) => {
    const { buy, sell } = action.payload.data.history
    return freeze({
      ...state,
      dashboard: action.payload.data,
      waitingTrading: {
        buy,
        sell
      }
    })
  },
  [actions.updateStocks]: (state, action) => {
    return freeze({
      ...state,
      dashboard: {
        ...state.dashboard,
        stocks: action.payload
      }
    })
  },
  [actions.handleInputDatlenhChange]: (state, action) => {
    let event = action.payload
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    if (name === "stock") {
      return freeze({
        ...state,
        matchedPriceEditable: true,
        datlenh: {
          isError: false,
          isBuying: state.datlenh.isBuying,
          [name]: value,
          type: "",
          purchasePrice: ""
        }
      })
    }
    if (name === "number") {
      if (state.datlenh.type === "LO") {
        let step = value % 10
        if( step !== 0){
          return freeze({
            ...state,
            datlenh: {
              ...state.datlenh,
              isError: false,
              quantity: true,
              [name]: value,
              tempPrice: "",
            }
          })
        }
        return freeze({
          ...state,
          datlenh: {
            ...state.datlenh,
            isError: false,
            quantity: false,
            [name]: value,
            tempPrice: value * state.datlenh.purchasePrice
          }
        })
      }
      return freeze({
        ...state,
        datlenh: {
          ...state.datlenh,
          isError: false,
          quantity: false,
          [name]: value,
          tempPrice: value * state.datlenh.matchedPrice
        }
      })
    
    } 
    if (name === "purchasePrice") {
      if (value <= 10000) {
        let step = value % 10
        if(step !== 0) {
          return freeze({
            ...state,
            datlenh: {
              ...state.datlenh,
              priceStep: true,
              isError: false,
              [name]: value,
              tempPrice: "",
              number: ""
            }
          })
        }
        return freeze({
          ...state,
          datlenh: {
            ...state.datlenh,
            priceStep: false,
            isError: false,
            [name]: value,
          }
        })
      }
      if (value > 10000 && value <= 50000) {
        let step = value % 50
        if(step !== 0) {
          return freeze({
            ...state,
            datlenh: {
              ...state.datlenh,
              priceStep: true,
              isError: false,
              [name]: value,
              tempPrice: "",
              number: ""
            }
          })
        }
        return freeze({
          ...state,
          datlenh: {
            ...state.datlenh,
            priceStep: false,
            isError: false,
            [name]: value,
          }
        })
      }
      if (value > 10000) {
        let step = value % 100
        if(step !== 0) {
          return freeze({
            ...state,
            datlenh: {
              ...state.datlenh,
              priceStep: true,
              isError: false,
              [name]: value,
              tempPrice: "",
              number: ""
            }
          })
        }
        return freeze({
          ...state,
          datlenh: {
            ...state.datlenh,
            priceStep: false,
            isError: false,
            [name]: value,
          }
        })
      }
      return freeze({
        ...state,
        datlenh: {
          ...state.datlenh,
          priceStep: false,
          isError: false,
          [name]: value,
        }
      })
    }
    return freeze({
      ...state,
      datlenh: {
        ...state.datlenh,
        priceStep: false,
        isError: false,
        [name]: value,
      }
    })
  },
  [actions.handleChangeLoaiDatLenh]: (state, action) => {
    let event = action.payload
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    let purchasePrice = _.filter(state.dashboard.stocks, (o) => { return o.id === _.get(state, "datlenh.stock") });
    if (value === "LO") {
      return freeze({
        ...state,
        matchedPriceEditable: true,
        datlenh: {
          ...state.datlenh,
          [name]: value,
          purchasePrice: _.get(purchasePrice, "0.matchedPrice")
        }
      })
    } else {
      return freeze({
        ...state,
        matchedPriceEditable: false,
        datlenh: {
          ...state.datlenh,
          [name]: value,
          purchasePrice: value,
          matchedPrice: _.get(purchasePrice, "0.matchedPrice")
        }
      })
    }
  },
  [actions.tradingCreateSuccess]: (state, action) => {
    const { isBuying } = action.payload.data
    if (isBuying) {
      return freeze({
        ...state,
        waitingTrading: {
          ...state.waitingTrading,
          buy: [...state.waitingTrading.buy, action.payload.data]
        }
      })
    } else {
      return freeze({
        ...state,
        waitingTrading: {
          ...state.waitingTrading,
          sell: [...state.waitingTrading.sell, action.payload.data]
        }
      })
    }
  },
  [actions.clearWaiting]: (state, action) => {
    return freeze({
      ...state,
      // waitingTrading: initialState.waitingTrading
    })
  },
  [actions.updateTrading]: (state, action) => {
    const { isBuying, id } = action.payload
    if (isBuying) {
      return freeze({
        ...state,
        waitingTrading: {
          ...state.waitingTrading,
          buy: [...state.waitingTrading.buy.map(item => {
            if (item.id === id) {
              return action.payload
            }
            return item
          })]
        }
      })
    } else {
      return freeze({
        ...state,
        waitingTrading: {
          ...state.waitingTrading,
          sell: [...state.waitingTrading.sell.map(item => {
            if (item.id === id) {
              return action.payload
            }
            return item
          })]
        }
      })
    }
  },
  [actions.updateUserInfo]: (state, action) => {
    return freeze({
      ...state,
      dashboard: {
        ...state.dashboard,
        user: action.payload
      }
    })
  },
  [actions.tradingCreateFail]: (state, action) => {
    return freeze({
      ...state,
      datlenh: {
        ...state.datlenh,
        isError: true,
        errorMess: action.payload
      }
    })
  }
}, initialState);
