import axios from 'axios';
import config from '../config';

// const API_BASE_URL = config.API.URL;
const API_BASE_URL = "http://localhost:4000";

export const getAuthHeader = (contentType) => {
  //const user = getCurrentUser();
  const user = null;
  if (user && user.token) {
    return {
      "Content-Type": contentType,
      "Authorization": 'Bearer ' + user.token
    };
  } else {
    return {
      "Content-Type": contentType
    };
  }
};

// requestType can be either "issuance" or "presentation"
export const getRequestConfig = (endPoint) => {
 return axios({
  method: "get",
  url: `${API_BASE_URL}/${endPoint}`,
  headers: getAuthHeader("application/json")
 })
}