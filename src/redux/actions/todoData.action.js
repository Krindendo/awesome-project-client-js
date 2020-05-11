import {
  SET_ERRORS,
  LOAD_PROJECTS,
  SAVE_PROJECT,
  DELETE_PROJECT,
  LOAD_TASKS,
  SAVE_TASK,
  DELETE_TASK,
  SELECT_PROJECT,
} from "../types";
import { todoService } from "../../services";

const loadProjects = () => {
  return (dispatch) => {
    todoService.loadProjects().then(({ data, error }) => {
      if (data) {
        dispatch({ type: LOAD_PROJECTS, payload: data });
        console.log("data", data);
      } else {
        dispatch({ type: SET_ERRORS, payload: { loadProject: error } });
        dispatch({ type: LOAD_PROJECTS, payload: {} });
      }
    });
  };
};
const addProject = () => {};
const saveProject = (newProject) => {
  return (dispatch) => {
    todoService.saveProject(newProject).then((data) => {
      if (data.data) dispatch({ type: SAVE_PROJECT, payload: data.data });
      else
        dispatch({
          type: SET_ERRORS,
          payload: { todo: data.err.response.data },
        }); //Treba obrisati te errore :D
    });
  };
};
const deleteProject = (id) => {};
const loadTasks = () => {};
const addTask = () => {};
const saveTask = () => {};
const deleteTask = () => {};

export const todoActions = {
  loadProjects,
  addProject,
  saveProject,
  deleteProject,
  loadTasks,
  addTask,
  saveTask,
  deleteTask,
};
