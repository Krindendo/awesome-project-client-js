import React, { useState } from "react";
import "../scss/UiEdit.scss";
import { UI_RESET } from "../../redux/types";
import { useSelector, useDispatch } from "react-redux";

export const UiEdit = () => {
  const [name, setName] = useState("");
  const id = useSelector((state) => state.ui.projectId);
  const dispatch = useDispatch();

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    console.log("edit");
    dispatch({ type: UI_RESET });
  };
  const handleCancel = () => {
    dispatch({ type: UI_RESET });
  };
  return (
    <div className="uiEdit">
      <form className="uiEdit__form" noValidate onSubmit={handleSubmit}>
        <p className="uiEdit__form__last">Last Project Name: {}</p>
        <p className="uiEdit__form__new">New Project Name: </p>
        <input
          className="uiEdit__form__input"
          type="text"
          value={name}
          onChange={handleName}
        />
        <div className="uiEdit__form__box">
          <button className="uiEdit__form__box__edit" type="submit">
            Edit
          </button>
          <button
            className="uiEdit__form__box__cancel"
            onClick={handleCancel}
            onKeyDown={handleCancel}
            type="button"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
