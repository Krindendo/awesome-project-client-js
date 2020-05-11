import { LOADING_UI, UI_RESET, SET_ERRORS, LOGOUT, GET_NICK } from "../types";
import { userService } from "../../services";
import { history } from "../../helpers";

const login = (email, password) => {
  return (dispatch) => {
    dispatch({ type: LOADING_UI });

    userService.login(email, password).then((data) => {
      console.log("data", data);

      if (data.user) {
        dispatch({ type: UI_RESET });
        history.push("/home");
      } else {
        dispatch({ type: SET_ERRORS, payload: data.error.response.data });
      }
    });
  };
};
const logout = () => {
  userService.logout();
  return (dispatch) => dispatch({ type: LOGOUT });
};
const login_anonymous = () => {
  console.log("Anonymous Login");
};
const getUser = () => {
  let nick = userService.getUserNick();
  return (dispatch) => dispatch({ type: GET_NICK, payload: nick });
};
const signup = () => {
  return (dispatch) =>
    dispatch({
      type: SET_ERRORS,
      payload: { signup: "Sign up is not posible" },
    });
};

export const userActions = {
  login,
  logout,
  login_anonymous,
  getUser,
  signup,
};
