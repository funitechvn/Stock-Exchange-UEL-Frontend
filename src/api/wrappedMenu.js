import config from "../config";
import axios from "axios";

const baseEndpoint = `${config.apiBaseURL}`;

export function authorize(data) {
  const endpoint = `${baseEndpoint}/users/login`;
  return axios.post(endpoint, data);
}

export function logout(data) {
  const endpoint = `${baseEndpoint}/users/logout`;
  return axios.post(endpoint, {})
}