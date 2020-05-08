import { LOADING_UI, LOGIN_SUCCESS, SET_ERRORS, LOGOUT } from "../types";
import { userService } from "../../services";
import { history } from "../../helpers";

const login = (email, password) => {
  return (dispatch) => {
    dispatch(request());

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
  function request() {
    return { type: LOADING_UI };
  }
  function success(user) {
    return { type: LOGIN_SUCCESS, payload: user };
  }
  function failure(error) {
    return { type: SET_ERRORS, payload: error.response.data };
  }
};
const logout = () => {
  userService.logout();
  return { type: LOGOUT };
};
const login_anonymous = () => {
  console.log("Anonymous Login");
};
const getUser = () => {
  return userService.getUserNick();
};
const signup = () => {
  return (dispatch) => {
    dispatch({ type: SET_ERRORS, payload: "Sign up is not posible" });
  };
};

export const userActions = {
  login,
  logout,
  login_anonymous,
  getUser,
  signup,
};
