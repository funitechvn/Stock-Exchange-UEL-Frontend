import config from "../config";
import { request } from "services/api";

const baseEndpoint = `${config.apiBaseURL}/dashboard`;

export function fetchDataDashboard(data) {
  const endpoint = `${baseEndpoint}/`;
  return request(endpoint, "GET")
}

export function tradingCreate(data) {
  const endpoint = `${config.apiBaseURL}/stocks`;
  return request(endpoint, "POST", data.data)
}