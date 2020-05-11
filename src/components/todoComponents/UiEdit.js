import React from "react";
import "../scss/UiEdit.scss";
import { UI_RESET } from "../../redux/types";
import { useSelector, useDispatch } from "react-redux";

export const UiEdit = () => {
  const id = useSelector((state) => state.ui.projectId);
  return (
    <div className="ui_edit">
      <form action="">
        <p>Last Project Name: </p>
        <p>New Project Name: </p>
        <input type="text" />
      </form>
    </div>
  );
};
