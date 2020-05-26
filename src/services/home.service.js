import axios from "axios";

const getTags = () => {
  return axios
    .get("/tags")
    .then(({ data }) => {
      return { data };
    })
    .catch((error) => {
      console.log("error", error.response);
      return { error };
    });
};
const getNotes = () => {
  return axios
    .get("/notes")
    .then(({ data }) => {
      return { data };
    })
    .catch((error) => {
      console.log("error", error.response);
      return { error };
    });
};
const putNote = (_newNote) => {
  let newNote = {
    body: _newNote.text,
    section: _newNote.section,
    title: _newNote.title,
  };
  return axios
    .post("/notes", newNote)
    .then(({ data }) => {
      return { data };
    })
    .catch((error) => {
      console.log("error", error.response);
      return { error };
    });
};
const updateNote = (_updateNote) => {
  let updateNote = {
    body: _updateNote.text,
    section: _updateNote.section,
    title: _updateNote.title,
  };
  console.log("update", updateNote);
  return axios
    .patch(`/notes/${_updateNote.docId}`, updateNote)
    .then(({ data }) => {
      return { data };
    })
    .catch((error) => {
      console.log("error", error.response);
      return { error };
    });
};
const deleteNote = (noteId) => {
  return axios
    .delete(`/notes/${noteId}`)
    .then(({ data }) => {
      return { data };
    })
    .catch((error) => {
      console.log("error", error.response);
      return { error };
    });
};

export const homeService = {
  getTags,
  getNotes,
  putNote,
  updateNote,
  deleteNote,
};
