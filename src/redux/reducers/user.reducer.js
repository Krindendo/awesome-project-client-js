import { GET_NICK, LOGOUT } from "../types";

const initialState = {
  nick: "Anonymous",
};

export const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_NICK:
      return { nick: action.payload };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
