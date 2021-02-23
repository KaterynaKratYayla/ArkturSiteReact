import axios from "axios";
import authHeader from "./auth-header";

/* My new server */
// const API_URL = "http://authentication-jwt/api/";
const API_URL = "http://content-server/interface/remote/";
// const API_URL = "http://localhost:8080/api/test/";

/*const getPublicContent = () => {
  return axios.get(API_URL + "all");
};*/

const getPublicContent = () => {
  // return axios.get(API_URL + "test_all.php");
  return axios.get(API_URL + "test_all");
};

const getUserBoard = () => {
  // return axios.get(API_URL + "user.php", { headers: authHeader() });
  return axios.post(API_URL + "user", JSON.stringify({ headers: authHeader() }));
  // return axios.post("http://authentication-jwt/api/" + "user.php", JSON.stringify({ headers: authHeader() }));
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};