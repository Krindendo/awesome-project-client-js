import { LOAD_FILES, SAVE_FILE, DELETE_FILE } from "../types";
import { cloudService } from "../../services";

const getListOfFiles = () => async (dispatch) => {
  const data = await cloudService.getListOfFiles();
  dispatch({ type: LOAD_FILES, payload: data });
};
const uploadFile = (newFile) => async (dispatch) => {
  const data = await cloudService.uploadFile(newFile);
  dispatch({ type: SAVE_FILE, payload: data });
};
const deleteFile = (fileId) => async (dispatch) => {
  await cloudService.deleteFile(fileId);
  console.log("fildId", fileId);
  dispatch({ type: DELETE_FILE, payload: fileId });
};

const downloadFile = (file) => async () => {
  const data = await cloudService.downloadFile(file);
  return data;
};

export const cloudActions = {
  getListOfFiles,
  uploadFile,
  deleteFile,
  downloadFile,
};
