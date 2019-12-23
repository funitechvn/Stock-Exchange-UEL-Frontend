import config from "../config";
import { request } from "services/api";

const baseEndpoint = `${config.apiBaseURL}/history`;

export function fetchData(data) {
  const endpoint = `${baseEndpoint}/`;
  return request(endpoint, "GET")
}
