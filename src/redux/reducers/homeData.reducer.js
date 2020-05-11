import {} from "../types";
const initialState = {};

export const home = (state = initialState, action) => {
  switch (action.type) {
    case "nesto":
      return {
        user: action.user,
      };
    default:
      return state;
  }
};
