import config from "../config";
import { request } from "services/api";

const baseEndpoint = `${config.apiBaseURL}/activationKeys`;

export function fetchActiveKey(data) {
  const endpoint = `${baseEndpoint}`;
  return request (endpoint, "GET")
}

export function generateKey(data) {
  const endpoint = `${baseEndpoint}`;
  return request (endpoint, "POST", {numOfKey: data.numOfKey})
}