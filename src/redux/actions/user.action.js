import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../types";
import { userService } from "../../services";

const login = (username, password) => {
  return (dispatch) => {
    dispatch(request({ username }));

    userService.login(username, password).then((data) => {
      if (data.user) {
        dispatch(success(user));
        history.push("/home");
      } else {
        dispatch(failure(error.toString()));
      }
    });

    function request(user) {
      return { type: LOGIN_REQUEST, user };
    }
    function success(user) {
      return { type: LOGIN_REQUEST, user };
    }
    function failure(user) {
      return { type: LOGIN_REQUEST, user };
    }
  };
};
const logout = () => {
  userService.logout();
  return { type: LOGOUT };
};
const login_anonymous = (user) => {};
const getUser = (user) => {};
const signup = (user) => {};

export const userActions = {
  login,
  logout,
  login_anonymous,
  getUser,
  signup,
};
