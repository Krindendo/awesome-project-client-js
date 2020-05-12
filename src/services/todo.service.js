import axios from "axios";

const loadProjects = (priority) => {
  return axios
    .get("/projects")
    .then(({ data }) => {
      return { data };
    })
    .catch((error) => {
      console.log("loadProjects error", error.response.date);
      return { error };
    });
};
const editProject = () => {};

const saveProject = (newProject) => {
  // newProject = { nameOfProject, priority }
  // priority.toLowerCase() Ovo promeniti u backend-u
  return axios
    .post("/project", newProject)
    .then(({ data }) => {
      return { data };
    })
    .catch((error) => {
      console.log("saveProject error", error.response.date);
      return { error };
    });
};
const deleteProject = (projectId) => {
  return axios
    .delete(`/project/${projectId}`)
    .then(({ data }) => {
      return { data };
    })
    .catch((error) => {
      console.log("deleteProject error", error.response.date);
      return { error };
    });
};
const loadTasks = () => {
  return axios
    .get("/tasks")
    .then(({ data }) => {
      return { data };
    })
    .catch((error) => {
      console.log("loadTasks error", error.response.date);
      return { error };
    });
};
const saveTask = (newTask) => {
  return axios
    .post("/task", newTask)
    .then(({ data }) => {
      return { data };
    })
    .catch((error) => {
      console.log("saveTask error", error.response.date);
      return { error };
    });
};
const deleteTask = (taskId) => {
  return axios
    .delete(`/task/${taskId}`)
    .then(({ data }) => {
      return { data };
    })
    .catch((error) => {
      console.log("deleteTask error", error.response.date);
      return { error };
    });
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
