import axios from "axios";
import authHeader from "./auth-header";

console.log('[file]:import', 'import authHeader from "./auth-header";');
console.log('[file]', 'src/Redux/services/user.service.js');
/* My new server */
// const API_URL = "http://authentication-jwt/api/";
// const API_URL = "http://content-server/interface/remote/";
const API_URL = "http://smartbooker.biz/interface/remote/";
// const API_URL = "http://localhost:8080/api/test/";

/*const getPublicContent = () => {
  return axios.get(API_URL + "all");
};*/

const getPublicContent = () => {
  console.log('[file]:const getPublicContent', 'src/Redux/services/user.service.js');
  // return axios.get(API_URL + "test_all.php");
  return axios.get(API_URL + "test_all");
};

const getUserBoard = () => {
  console.log('[file]:const getUserBoard', 'src/Redux/services/user.service.js');
  // return axios.get(API_URL + "user.php", { headers: authHeader() });
  return axios.post(API_URL + "user", JSON.stringify({ headers: authHeader() }));
  // return axios.post("http://authentication-jwt/api/" + "user.php", JSON.stringify({ headers: authHeader() }));
};

const getModeratorBoard = () => {
  console.log('[file]:const getModeratorBoard', 'src/Redux/services/user.service.js');
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  console.log('[file]:const getAdminBoard', 'src/Redux/services/user.service.js');
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};
