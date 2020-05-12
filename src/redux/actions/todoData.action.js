import {
  SET_ERRORS,
  LOAD_PROJECTS,
  SAVE_PROJECT,
  DELETE_PROJECT,
  LOAD_TASKS,
  SAVE_TASK,
  DELETE_TASK,
} from "../types";
import { todoService } from "../../services";
import { useSelector } from "react-redux";

const loadProjects = () => {
  return (dispatch) => {
    todoService.loadProjects().then(({ data, error }) => {
      if (data) {
        dispatch({ type: LOAD_PROJECTS, payload: data });
      } else {
        dispatch({
          type: SET_ERRORS,
          payload: { loadProject: error.response.date },
        });
        dispatch({ type: LOAD_PROJECTS, payload: {} });
      }
    });
  };
};
const saveProject = (newProject) => {
  return (dispatch) => {
    todoService.saveProject(newProject).then(({ data, error }) => {
      if (data) {
        dispatch({ type: SAVE_PROJECT, payload: data });
      } else
        dispatch({
          type: SET_ERRORS,
          payload: { todo: error.response.data },
        }); //Treba obrisati te errore :D
    });
  };
};
const deleteProject = (projectId) => {
  return (dispatch) => {
    todoService.deleteProject(projectId).then(({ data, error }) => {
      if (data) {
        dispatch({ type: DELETE_PROJECT, payload: projectId });
      } else {
        dispatch({
          type: SET_ERRORS,
          payload: { todo: error.response.data },
        });
      }
    });
  };
};
const loadTasks = () => {
  return (dispatch) => {
    todoService.loadTasks().then(({ data, error }) => {
      if (data) {
        dispatch({ type: LOAD_TASKS, payload: data });
      } else {
        dispatch({
          type: SET_ERRORS,
          payload: { todo: error.response.data },
        });
      }
    });
  };
};

const saveTask = (newTask) => {
  return (dispatch) => {
    todoService.saveTask(newTask).then(({ data, error }) => {
      console.log("data", data);
      if (data) {
        dispatch({ type: SAVE_TASK, payload: data.newTask });
      } else {
        dispatch({
          type: SET_ERRORS,
          payload: { todo: error.response.data },
        });
      }
    });
  };
};
const deleteTask = (taskId) => {
  return (dispatch) => {
    todoService.deleteTask(taskId).then(({ data, error }) => {
      if (data) {
        dispatch({ type: DELETE_TASK, payload: taskId });
      } else {
        dispatch({
          type: SET_ERRORS,
          payload: { todo: error.response.data },
        });
      }
    });
  };
};

const addProject = () => {};
const addTask = () => {};

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
