import { LOAD_FILES, SAVE_FILE, DELETE_FILE } from "../types";
const initialState = {
  files: {},
};

export const cloud = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FILES:
      return {
        ...state,
        files: action.payload,
      };
    case SAVE_FILE:
      return {
        ...state,
        files: [...state.files, action.payload],
      };
    case DELETE_FILE:
      const index = state.files.findIndex(
        (file) => file.docId === action.payload
      );
      state.files.splice(index, 1);
      return {
        ...state,
      };
    default:
      return state;
  }
};
