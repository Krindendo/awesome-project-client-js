import {
  LOAD_TAGS,
  LOAD_NOTES,
  SET_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
  SET_ERRORS,
} from "../types";
import { homeService } from "../../services";

const getTags = () => {
  return (dispatch) => {
    homeService.getTags().then(({ data, error }) => {
      if (data) {
        dispatch({ type: LOAD_TAGS, payload: data });
      } else {
        dispatch({
          type: SET_ERRORS,
          payload: { getTags: error.response.date },
        });
      }
    });
  };
};
const getNotes = () => {
  return (dispatch) => {
    homeService.getNotes().then(({ data, error }) => {
      if (data) {
        dispatch({ type: LOAD_NOTES, payload: data });
      } else {
        dispatch({
          type: SET_ERRORS,
          payload: { getNotes: error.response.date },
        });
      }
    });
  };
};
const putNote = (newNote) => {};
const updateNote = (updateNote) => {};
const deleteNote = (noteId) => {};

export const homeActions = {
  getTags,
  getNotes,
  putNote,
  updateNote,
  deleteNote,
};
