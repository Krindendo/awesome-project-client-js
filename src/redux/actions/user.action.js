import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../types";
import { userService } from "../../services";
import { history } from "../../helpers";

const login = (email, password) => {
  return (dispatch) => {
    dispatch(request({ email }));

    userService.login(email, password).then((data) => {
      console.log("data", data);

      if (data.user) {
        dispatch(success(data.user));
        history.push("/home");
      } else {
        dispatch(failure(data.error));
      }
    });
  };
  function request(user) {
    return { type: LOGIN_REQUEST, payload: user };
  }
  function success(user) {
    return { type: LOGIN_SUCCESS, payload: user };
  }
  function failure(error) {
    return { type: LOGIN_FAILURE, payload: error };
  }
};
const logout = () => {
  userService.logout();
  return { type: LOGOUT };
};
const login_anonymous = () => {
  console.log("Anonymous Login");
};
const getUser = (user) => {};
const signup = (user) => {};

export const userActions = {
  login,
  logout,
  login_anonymous,
  getUser,
  signup,
};
