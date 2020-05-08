import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../types";

let user = localStorage.getItem("user");
const initialState = user ? { user } : {};

export const authentication = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        user: action.user,
      };
    case LOGOUT:
      return {};
    default:
      return state;
  }
};
