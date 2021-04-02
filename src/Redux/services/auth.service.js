import axios from "axios";

console.log('[file]', 'src/Redux/services/auth.service.js');
/* My new server */
// const API_URL = "http://authentication-jwt/api/";
// const API_URL = "http://content-server/interface/remote/";
const API_URL = "http://smartbooker.biz/interface/remote/";

const register = (firstName, lastName, username, email, password) => {
  console.log('[file]:const register', 'src/Redux/services/auth.service.js');
  return axios.post(API_URL + "create_user", JSON.stringify({
    "firstname": firstName,
    "lastname": lastName,
    "username": username,
    "email": email,
    "password": password,
  }));
};

const login = (username, password) => {
  console.log('[file]:const login', 'src/Redux/services/auth.service.js');
  return axios
    .post(API_URL + "login", JSON.stringify({
      "username": username,
      "password": password,
    }))
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

/* Original 2021-02-12 */
/*const API_URL = "http://localhost:8080/api/auth/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};*/

const logout = () => {
  console.log('[file]:const logout', 'src/Redux/services/auth.service.js');
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
