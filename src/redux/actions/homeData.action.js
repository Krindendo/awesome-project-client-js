import {
  LOAD_TAGS,
  LOAD_NOTES,
  SET_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
} from "../types";
import { homeService } from "../../services";

const getTags = () => async (dispatch) => {
  const data = await homeService.getTags();
  dispatch({ type: LOAD_TAGS, payload: data });
};
const getNotes = () => async (dispatch) => {
  const data = await homeService.getNotes();
  dispatch({ type: LOAD_NOTES, payload: data });
};
const putNote = (_newNote) => async (dispatch) => {
  let newNote = {
    body: _newNote.body,
    title: _newNote.title,
    section: _newNote.section,
  };
  const data = await homeService.putNote(newNote);
  if (data !== null) dispatch({ type: SET_NOTE, payload: data });
};
const updateNote = (_updateNote) => async (dispatch) => {
  let updateNote = {
    body: _updateNote.text,
    section: _updateNote.section,
    title: _updateNote.title,
    docId: _updateNote.docId,
  };
  const data = await homeService.updateNote(updateNote);
  dispatch({ type: UPDATE_NOTE, payload: data });
};
const deleteNote = (noteId) => async (dispatch) => {
  await homeService.deleteNote(noteId);
  dispatch({ type: DELETE_NOTE, payload: noteId });
};

export const homeActions = {
  getTags,
  getNotes,
  putNote,
  updateNote,
  deleteNote,
};
