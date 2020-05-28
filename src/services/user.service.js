import axios from "axios";
import jwtDecode from "jwt-decode";

axios.defaults.baseURL =
  "https://europe-west1-awesomeproject1010.cloudfunctions.net/api";

const login = async (userData) => {
  try {
    const { data } = await axios.post("/login", userData);
    let decodedToken = saveUser(data);
    return { user: decodedToken };
  } catch (error) {
    console.log("error", error);
  }
};
const logout = () => {
  localStorage.removeItem("user");
  delete axios.defaults.headers.common["Authorization"];
  delete axios.defaults.headers.common["userid"];
};
const login_anonymous = async () => {
  console.log("Login anonymously");
  try {
    const { data } = axios.get("/login");
    let decodedToken = saveUser(data);
    return { user: decodedToken };
  } catch (error) {
    console.log("error", error.response);
  }
};
const getUserNick = () => {
  return "krindendo";
  // return axios
  //   .get("/home")
  //   .then(({ data }) => {})
  //   .catch((err) => {});
};

const saveUser = (_data) => {
  const IdToken = `Bearer ${_data.token}`;
  const decodedToken = jwtDecode(_data.token);
  axios.defaults.headers.common["Authorization"] = IdToken;
  axios.defaults.headers.common["userid"] = decodedToken.user_id;
  localStorage.setItem("user", decodedToken);
  return decodedToken;
};

export const userService = {
  login,
  logout,
  getUserNick,
  login_anonymous,
};
