import config from "../config";
import axios from "axios";
import { request } from "services/api";

const baseEndpoint = `${config.apiBaseURL}`;

export function authorize(data) {
  const endpoint = `${baseEndpoint}/login`;
  return axios.post(endpoint, data);
}

export function requestPassword(data) {
  const endpoint = `${baseEndpoint}/forgot-password`;
  let dataConfig = {
    email: data.email
  };

  return axios.post(endpoint, dataConfig);
}

export function submitPassword(data) {
  const token = data.token;
  const email = data.email;
  const endpoint = `${baseEndpoint}/forgot-password/${token}/${email}`;
  let dataConfig = {
    password: data.newPassword
  };

  return axios.post(endpoint, dataConfig);
}

export function checkToken(data) {
  const endpoint = `${baseEndpoint}/verify/forgot-password`;
  let dataConfig = {
    token: data.token,
    email: data.email
  };
  const init = {
    headers: {}
  };
  init.headers["Content-Type"] = "application/json";

  return axios.post(endpoint, dataConfig, init);
}

export function requestChangePassword(data) {
  const endpoint = `${baseEndpoint}/users/change-password/`;
  let dataConfig = {
    password: data.newPassword
  };
  return request(endpoint, "POST", dataConfig);
}

export function register(data) {
  console.log(data)
  const endpoint = `${baseEndpoint}/register`;

  return axios.post(endpoint, data)
}