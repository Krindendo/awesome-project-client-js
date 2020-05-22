import axios from "axios";

const getTags = () => {
  return axios
    .get("/tags")
    .then(({ data }) => {
      return { data };
    })
    .catch((error) => {
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
      return { error };
    });
};
const putNote = (newNote) => {
  return axios
    .post("/note", newNote)
    .then(({ data }) => {
      return { data };
    })
    .catch((error) => {
      return { error };
    });
};
const updateNote = (updateNote) => {
  return axios
    .patch(`/updateNote/${updateNote.docId}`, updateNote)
    .then(({ data }) => {
      return { data };
    })
    .catch((error) => {
      return { error };
    });
};
const deleteNote = (noteId) => {
  return axios
    .delete(`/note/${noteId}`)
    .then(({ data }) => {
      return { data };
    })
    .catch((error) => {
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
