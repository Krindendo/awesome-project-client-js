import {
  LOAD_PROJECTS,
  ADD_PROJECT,
  SAVE_PROJECT,
  DELETE_PROJECT,
  LOAD_TASKS,
  ADD_TASK,
  SAVE_TASK,
  DELETE_TASK,
  SELECT_PROJECT,
} from "../types";
const initialState = {
  projects: [],
  tasks: [],
  selectedProject: { name: "Today", id: "" }, //Trebace mi id od projeckta
};

export const todo = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case ADD_PROJECT:
      return {
        ...state,
        // Ovo proveriti
      };
    case SAVE_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };
    case DELETE_PROJECT:
      const index1 = state.projects.findIndex(
        (project) => project.projectId === action.payload
      );
      state.projects.splice(index1, 1);
      return {
        ...state,
      };
    case LOAD_TASKS:
      return {
        ...state,
        tasks: action.payload,
        loading_task: false,
      };
    case ADD_TASK:
      /* OVO PROVERITI */
      return {
        ...state,
      };
    case SAVE_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK:
      const index2 = state.tasks.findIndex(
        (task) => task.id === action.payload
      );
      state.tasks.splice(index2, 1);
      return {
        ...state,
      };
    case SELECT_PROJECT:
      return {
        ...state,
        selectedProject: action.payload,
      };

    default:
      return state;
  }
};
