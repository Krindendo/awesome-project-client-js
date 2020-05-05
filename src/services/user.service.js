import axios from "axios";
import jwtDecode from "jwt-decode";

axios.defaults.baseURL =
  "https://europe-west1-awesomeproject1010.cloudfunctions.net/api";

const login = (email, password) => {
  userData = { email: email, password: password };
  axios
    .post("/login", userData)
    .then(({ data }) => {
      console.log("user", data);
      console.log("jwtDecode(user)", jwtDecode(user));
      localStorage.setItem("user", jwtDecode(data));
      return { user: data };
    })
    .catch((err) => {
      console.log("err", err);
      return { error: err };
    });
};
const logout = () => {
  localStorage.removeItem("user");
};
const login_anonymous = () => {};
const getUser = () => {
  //Get user nick
  axios
    .get("/home")
    .then(({ data }) => {})
    .catch((err) => {});
};
const signup = (user) => {
  // Nece biti moguce, izbacuje error
};

export const userService = {
  login,
  logout,
  signup,
  getUser,
  login_anonymous,
};
