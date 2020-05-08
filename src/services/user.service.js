import axios from "axios";
import jwtDecode from "jwt-decode";

axios.defaults.baseURL =
  "https://europe-west1-awesomeproject1010.cloudfunctions.net/api";

const login = (email, password) => {
  let userData = { email: email, password: password };
  return axios
    .post("/login", userData)
    .then(({ data }) => {
      const IdToken = `Bearer ${data.token}`;
      const decodedToken = jwtDecode(data.token);
      axios.defaults.headers.common["Authorization"] = IdToken;
      axios.defaults.headers.common["userid"] = decodedToken.user_id;
      localStorage.setItem("user", decodedToken);
      return { user: decodedToken };
    })
    .catch((err) => {
      console.log("err", err);
      return { error: err };
    });
};
const logout = () => {
  localStorage.removeItem("user");
  delete axios.defaults.headers.common["Authorization"];
  delete axios.defaults.headers.common["userid"];
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
