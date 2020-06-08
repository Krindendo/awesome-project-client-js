import axios from "axios";

const getTags = async () => {
  try {
    const { data } = await axios.get("/tags");
    return data;
  } catch (error) {
    console.log("error", error.response);
    return [];
  }
};
const getNotes = async () => {
  try {
    const { data } = await axios.get("/notes");
    return data;
  } catch (error) {
    console.log("error", error.response);
    return [];
  }
};
const putNote = async (newNote) => {
  try {
    const { data } = await axios.post("/notes", newNote);
    return data;
  } catch (error) {
    console.log("error", error.response);
  }
};
const updateNote = async (updateNote) => {
  try {
    const { data } = await axios.patch(
      `/notes/${updateNote.docId}`,
      updateNote
    );
    console.log("data", data);
    return data;
  } catch (error) {
    console.log("error", error.response);
  }
};
const deleteNote = async (noteId) => {
  try {
    const { data } = await axios.delete(`/notes/${noteId}`);
    return data;
  } catch (error) {
    console.log("error", error.response);
  }
};

export const homeService = {
  getTags,
  getNotes,
  putNote,
  updateNote,
  deleteNote,
};
