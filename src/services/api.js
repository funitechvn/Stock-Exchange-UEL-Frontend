import axios from "axios";
import store from "store";
import { camelizeKeys, snackizeKeys } from "./convert";
import _ from "lodash";
import { history } from "../stores";

export const handerError = (error) => {
  return new Promise((resolve, reject) => {
    const status = _.get(error, 'response.status')
    if (status < 500 && status >= 400) {
      if (status === 404) {
        return history.push('/404')
      } else {
        if (status === 401 || status === 406 || status === 403) {
          return history.push('/login')
        } else {
          return resolve(_.get(error, 'response.data.message'))
        }
      }
    } else {
      return resolve(_.get(error, 'response.data.message'))
    }
  })
}

export const CONTENT_TYPE = {
  form: "multipart/form-data",
  json: "application/json"
};

// export const getHeaders = (contentType = CONTENT_TYPE.json) => {
//   const token = store.get('token');
//   const header = {
//     'X-Access-Token': token ? `${token}` : "",
//     'Content-Type': contentType
//   }
//   return header;
// }

export const request = (endpoint, method, data, config = false) => {
  return new Promise((resolve, reject) => {
    const getHeaders = (contentType = CONTENT_TYPE.json) => {
      const token = store.get('token');
      const header = {
        'X-Access-Token': token ? `${token}` : "",
        'Content-Type': contentType
      }
      return header;
    }
    let headers = !config ? getHeaders() : getHeaders(CONTENT_TYPE.form)
    const initHeader = {
      ...headers
    }
    return axios({
      method: method,
      url: endpoint,
      headers: initHeader,
      data: snackizeKeys(data)
    }).then(res => { return resolve(camelizeKeys(res)) }).catch(async error => {
      return reject(await handerError(error))
    })
  })
};
