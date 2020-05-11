import {
  SET_ERRORS,
  LOADING_UI,
  UI_PROJECT,
  UI_TASK,
  UI_EDIT,
  UI_CONFORM,
  UI_RESET,
  PROJECT_ID,
} from "../types";
const initialState = {
  loading: false,
  errors: {},
  projectId: null, //To know which project to edit and conform
  ui_screen: {
    ui_grayScreen: false,
    ui_Project: false, //For Add Project
    ui_Task: false, //For Add Task
    ui_Edit: false, //For Edit Project
    ui_Conform: false, //For Delete Project
  },
};

export const ui = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case LOADING_UI:
      return {
        ...state,
        loading: true,
      };
    case UI_PROJECT:
      return {
        ...state,
        ui_grayScreen: true,
        ui_Project: true,
      };
    case UI_TASK:
      return {
        ...state,
        ui_Task: true,
      };
    case UI_EDIT:
      return {
        ...state,
        ui_grayScreen: true,
        ui_Edit: true,
      };
    case UI_CONFORM:
      return {
        ...state,
        ui_grayScreen: true,
        ui_Conform: true,
      };
    case PROJECT_ID:
      return {
        ...state,
        projectId: action.payload,
      };
    case UI_RESET:
      return initialState;
    default:
      return state;
  }
};
