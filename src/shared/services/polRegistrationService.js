var baseUrl = 'http://localhost:3000/';
import axios from 'axios';
export default {
  getRequest(url, headers, params) {
    return axios.get(baseUrl + url, {
      headers: headers,
      params: params
    });
  },
  postRequest(url, headers, body) {
    return axios.post(baseUrl + url, body, {
      headers: headers
    });
  }
};
