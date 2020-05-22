import React from "react";
import "../scss/AddProject.scss";
import { useDispatch } from "react-redux";
import { UI_PROJECT } from "../../redux/types";

export const AddProject = () => {
  const dispatch = useDispatch();
  const showClick = () => {
    dispatch({ type: UI_PROJECT });
  };
  return (
    <div
      className="addProject"
      onClick={showClick}
      onKeyDown={showClick}
      role="button"
      tabIndex={0}
    >
      <span className="addProject__plus">+</span>
      <span className="addProject__text">Add Project</span>
    </div>
  );
};
