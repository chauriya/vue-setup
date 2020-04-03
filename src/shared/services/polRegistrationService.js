var baseUrl = 'http://localhost:3000/';
import axios from 'axios';
class PolRegistrationService {
  async getEndpointToAdd(url) {
    url = baseUrl + url;
    var data = await axios.get(url, {});
    return data;
  }
}
export default new PolRegistrationService();
