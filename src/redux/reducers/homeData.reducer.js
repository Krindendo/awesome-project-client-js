import {
  LOAD_TAGS,
  LOAD_NOTES,
  SELECT_TAG,
  SET_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
} from "../types";
const initialState = {
  tags: {},
  notes: {},
  selectedTag: 1,
};

export const home = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TAGS:
      return {
        ...state,
        tags: action.payload,
      };
    case LOAD_NOTES:
      return {
        ...state,
        notes: action.payload,
      };
    case SELECT_TAG:
      return {
        ...state,
        selectedTag: action.payload,
      };
    case SET_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case UPDATE_NOTE:
      const index1 = state.notes.findIndex(
        (note) => note.docId === action.payload.docId
      );
      state.notes[index1] = action.payload;
      return {
        ...state,
      };
    case DELETE_NOTE:
      const index2 = state.notes.findIndex(
        (note) => note.docId === action.payload
      );
      state.notes.splice(index2, 1);
      return {
        ...state,
      };
    default:
      return state;
  }
};
