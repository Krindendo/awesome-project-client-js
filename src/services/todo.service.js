import axios from "axios";

const loadProjects = async (priority) => {
  try {
    const { data } = await axios.get("/projects");
    return data;
  } catch (error) {
    console.log("error", error.response.date);
    return {};
  }
};
const editProject = () => {};

const saveProject = async (newProject) => {
  // newProject = { nameOfProject, priority }
  try {
    const { data } = await axios.post("/project", newProject);
    return data;
  } catch (error) {
    console.log("error", error.response.date);
  }
};
const deleteProject = async (projectId) => {
  try {
    await axios.delete(`/project/${projectId}`);
  } catch (error) {
    console.log("error", error.response.date);
  }
};
const loadTasks = async () => {
  try {
    const { data } = await axios.get("/tasks");
    return data;
  } catch (error) {
    console.log("error", error.response.date);
    return {};
  }
};
const saveTask = async (newTask) => {
  try {
    const { data } = await axios.post("/task", newTask);
    return data;
  } catch (error) {
    console.log("error", error.response.date);
  }
};
const deleteTask = (taskId) => {
  try {
    const { data } = axios.delete(`/task/${taskId}`);
    return data;
  } catch (error) {
    console.log("error", error.response.date);
  }
};

// Proveriti
const addProject = () => {};
const addTask = () => {};

export const todoService = {
  loadProjects,
  addProject,
  editProject,
  saveProject,
  deleteProject,
  loadTasks,
  addTask,
  saveTask,
  deleteTask,
};
