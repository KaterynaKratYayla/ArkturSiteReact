import axios from "axios";

/* My new server */
// const API_URL = "http://authentication-jwt/api/";
// const API_URL = "http://content-server/interface/remote/";
// const API_URL = "http://smartbooker.biz/interface/remote/";
const API_URL = `${process.env.REACT_APP_SMART_URL}interface/remote/`;

const register = (firstName, lastName, username, email, password) => {
  return axios.post(API_URL + "create_user", JSON.stringify({
    "firstname": firstName,
    "lastname": lastName,
    "username": username,
    "email": email,
    "password": password,
  }));
};

const login = (username, password) => {
  return axios
    .post(API_URL + 'login', JSON.stringify({
      "username": username,
      "password": password,
    }))
    .then((response) => {
      // if (response.data.accessToken) {
        localStorage.setItem("user", response.config.data);
        // localStorage.setItem('generalUser',JSON.stringify(response))
      // }
      return response.config.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
