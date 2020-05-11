import axios from "axios";

const loadProjects = (priority) => {
  //treba da preuzme ili sve podatke ili samo jedan projekat u tom slucaju mu je potreban id
  let path = "/projects";
  if (priority !== undefined) path += "?priority=" + priority; //Proveriti ovo
  return axios
    .get(path)
    .then(({ data }) => {
      return { data };
    })
    .catch((error) => {
      return { error };
    });
};

const saveProject = (newProject) => {
  // newProject = { nameOfProject, priority }
  // priority.toLowerCase() Ovo promeniti u backend-u
  return axios
    .post("/project", newProject)
    .then(({ data }) => {
      return { data: data };
    })
    .catch((err) => {
      console.log("err", err);
      return { error: err };
    });
};
const deleteProject = (id) => {};
const loadTasks = () => {};
const saveTask = () => {};
const deleteTask = () => {};

// Proveriti
const addProject = () => {};
const addTask = () => {};

export const todoService = {
  loadProjects,
  addProject,
  saveProject,
  deleteProject,
  loadTasks,
  addTask,
  saveTask,
  deleteTask,
};
