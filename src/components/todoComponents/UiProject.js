import React, { useState } from "react";
import "../scss/UiProject.scss";
import { UI_RESET } from "../../redux/types";
import { useDispatch } from "react-redux";
import { todoActions } from "../../redux/actions/todoData.action";

export const UiProject = () => {
  const [nameOfProject, setNameOfProject] = useState("");
  const [priority, setPriority] = useState("Normal");
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    let newProject = {
      name: nameOfProject,
      priority: priority,
    };
    dispatch(todoActions.saveProject(newProject));
    dispatch({ type: UI_RESET });
  };
  const handleName = (event) => {
    setNameOfProject(event.target.value);
  };
  const handleId = (event) => {
    setPriority(event.target.id);
  };
  const handleCancel = () => {
    dispatch({ type: UI_RESET });
  };
  return (
    <div className="ui_project">
      <div className="ui_project__text">
        <p className="">Add project</p>
      </div>
      <form className="ui_project__form" noValidate onSubmit={handleSubmit}>
        <div className="ui_project__form__title">
          <p>Project name</p>
          <input
            type="text"
            name="task"
            value={nameOfProject}
            onChange={handleName}
          />
        </div>
        <div className="ui_project__form__priority">
          <p>Project priority</p>
          <button className="dropbtn">{priority}</button>
          <div className="ui_project__form__priority__dropdown">
            <ul className="dropdown__list">
              <li className="dropdown__list__item">
                <div
                  className="dropdown__list__item__button"
                  id="High"
                  onClick={handleId}
                  onKeyDown={handleId}
                  role="button"
                >
                  High
                </div>
              </li>
              <li>
                <div
                  className="dropdown__list__item__button"
                  id="Medium"
                  onClick={handleId}
                  onKeyDown={handleId}
                  role="button"
                >
                  Medium
                </div>
              </li>
              <li>
                <div
                  className="dropdown__list__item__button"
                  id="Low"
                  onClick={handleId}
                  onKeyDown={handleId}
                  role="button"
                >
                  Low
                </div>
              </li>
              <li>
                <div
                  className="dropdown__list__item__button"
                  id="Normal"
                  onClick={handleId}
                  onKeyDown={handleId}
                  role="button"
                >
                  Normal
                </div>
              </li>
            </ul>
          </div>
        </div>
        <button className="ui_project__form__submit" type="submit">
          Add
        </button>
        <button
          className="ui_project__form__cancel"
          onClick={handleCancel}
          onKeyDown={handleCancel}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};
