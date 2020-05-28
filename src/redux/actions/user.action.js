import { LOADING_UI, UI_RESET, SET_ERRORS, LOGOUT, GET_NICK } from "../types";
import { userService } from "../../services";
import { history } from "../../helpers";

const login = (email, password) => async (dispatch) => {
  let userData = { email, password };
  dispatch({ type: LOADING_UI });
  const { user } = await userService.login(userData);
  console.log("user", user);
  dispatch({ type: UI_RESET });
  history.push("/home");
};
const logout = () => async (dispatch) => {
  await userService.logout();
  dispatch({ type: LOGOUT });
};
const login_anonymous = () => async (dispatch) => {
  dispatch({ type: LOADING_UI });
  const { user } = await userService.login_anonymous();
  console.log("user", user);
  dispatch({ type: UI_RESET });
};
const getUser = () => async (dispatch) => {
  let nick = userService.getUserNick();
  return (dispatch) => dispatch({ type: GET_NICK, payload: nick });
};
const signup = () => (dispatch) => {
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
