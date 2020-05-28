import {
  LOAD_PROJECTS,
  SAVE_PROJECT,
  DELETE_PROJECT,
  LOAD_TASKS,
  SAVE_TASK,
  DELETE_TASK,
} from "../types";
import { todoService } from "../../services";

const loadProjects = () => async (dispatch) => {
  const { data, error } = await todoService.loadProjects();
  dispatch({ type: LOAD_PROJECTS, payload: data });
  if (error) dispatch({ type: LOAD_PROJECTS, payload: {} });
};
const saveProject = (newProject) => async (dispatch) => {
  const data = await todoService.saveProject(newProject);
  dispatch({ type: SAVE_PROJECT, payload: data });
};
const deleteProject = (projectId) => async (dispatch) => {
  await todoService.deleteProject(projectId);
  dispatch({ type: DELETE_PROJECT, payload: projectId });
};

const loadTasks = () => async (dispatch) => {
  const data = await todoService.loadTasks();
  dispatch({ type: LOAD_TASKS, payload: data });
};

const saveTask = (newTask) => async (dispatch) => {
  const data = await todoService.saveTask(newTask);
  dispatch({ type: SAVE_TASK, payload: data.newTask });
};
const deleteTask = (taskId) => async (dispatch) => {
  //Ne radi
  await todoService.deleteTask(taskId);
  dispatch({ type: DELETE_TASK, payload: taskId });
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
