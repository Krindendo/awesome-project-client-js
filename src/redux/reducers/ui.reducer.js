import { SET_ERRORS, LOADING_UI, UI_RESET } from "../types";
const initialState = {
  loading: false,
  errors: {},
};

export const ui = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case LOADING_UI:
      return {
        ...state,
        loading: true,
      };

    case UI_RESET:
      return {
        state: initialState,
      };

    default:
      return state;
  }
};
