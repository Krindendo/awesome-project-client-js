import axios from "axios";

const getListOfFiles = async () => {
  try {
    const { data } = await axios.get("/clouds");
    return data;
  } catch (error) {
    console.log("error", error.response);
    return {};
  }
};

const uploadFile = async (newFile) => {
  try {
    const { data } = await axios.post("/clouds", newFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  } catch (error) {
    console.log("error", error.response);
  }
};

const deleteFile = async (fileId) => {
  try {
    const { data } = await axios.delete(`/clouds/${fileId}`);
    return data;
  } catch (error) {
    console.log("error", error.response);
  }
};

const downloadFile = async (file) => {
  try {
    const { data } = await axios.post("/download", file);
    return data;
  } catch (error) {
    console.log("error", error.response);
  }
};

export const cloudService = {
  getListOfFiles,
  uploadFile,
  deleteFile,
  downloadFile,
};
