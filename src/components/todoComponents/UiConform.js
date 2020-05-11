import React from "react";
import "../scss/UiConform.scss";
import { UI_RESET } from "../../redux/types";
import { useSelector, useDispatch } from "react-redux";
import { todoActions } from "../../redux/actions/todoData.action";

export const UiConform = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.ui.projectId);
  const handleDelete = () => {
    todoActions.deleteProject(id);
    dispatch({ type: UI_RESET });
  };
  const handleCancel = () => {
    dispatch({ type: UI_RESET });
  };
  return (
    <div className="ui_conform">
      <p className="ui_conform__text">
        Are you sure you want to delete this project?
      </p>
      <button
        className="ui_conform__button"
        onClick={handleDelete}
        onKeyDown={handleDelete}
        type="button"
      >
        Yes
      </button>
      <button
        className="ui_conform__button"
        onClick={handleCancel}
        onKeyDown={handleCancel}
        type="button"
      >
        No
      </button>
    </div>
  );
};
