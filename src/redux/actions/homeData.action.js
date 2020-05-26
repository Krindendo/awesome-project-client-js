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
const putNote = (newNote) => {
  return (dispatch) => {
    homeService.putNote(newNote).then(({ data, error }) => {
      if (data) {
        dispatch({ type: SET_NOTE, payload: data });
      } else {
        dispatch({
          type: SET_ERRORS,
          payload: { putNote: error.response.date },
        });
      }
    });
  };
};
const updateNote = (updateNote) => {
  return (dispatch) => {
    homeService.updateNote(updateNote).then(({ data, error }) => {
      if (data) {
        dispatch({ type: UPDATE_NOTE, payload: updateNote });
      } else {
        dispatch({
          type: SET_ERRORS,
          payload: { updateNote: error.response.date },
        });
      }
    });
  };
};
const deleteNote = (noteId) => {
  return (dispatch) => {
    homeService.deleteNote(noteId).then(({ data, error }) => {
      if (data) {
        dispatch({ type: DELETE_NOTE, payload: noteId });
      } else {
        dispatch({
          type: SET_ERRORS,
          payload: { deleteNote: error.response.date },
        });
      }
    });
  };
};

export const homeActions = {
  getTags,
  getNotes,
  putNote,
  updateNote,
  deleteNote,
};
