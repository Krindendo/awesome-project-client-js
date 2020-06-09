import React, { useState } from "react";
import "../scss/UiProject.scss";
import { UI_RESET } from "../../redux/types";
import { useDispatch } from "react-redux";
import { todoActions } from "../../redux/actions/todoData.action";
import { FaAngleDown } from "react-icons/fa";

export const UiProject = () => {
  const [nameOfProject, setNameOfProject] = useState("");
  const [priority, setPriority] = useState("Normal");
  const [drop, setDrop] = useState(false);
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
  const handleDropDown = () => {
    setDrop(true);
  };
  const handleId = (event) => {
    setPriority(event.target.id);
    setDrop(false);
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
            className="ui_project__form__title__input"
            type="text"
            name="task"
            value={nameOfProject}
            onChange={handleName}
          />
        </div>
        <div className="ui_project__form__priority">
          <p className="ui_project__form__priority__text">Project priority</p>
          <button
            className="ui_project__form__priority__dropbtn"
            type="button"
            onClick={handleDropDown}
          >
            <p className="ui_project__form__priority__dropbtn__text">
              {priority}
            </p>
            <span className="ui_project__form__priority__dropbtn__icon">
              <FaAngleDown />
            </span>
          </button>
          {drop && (
            <div className="dropdown">
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
                <li className="dropdown__list__item">
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
                <li className="dropdown__list__item">
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
                <li className="dropdown__list__item">
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
          )}
        </div>
        <button className="ui_project__form__submit" type="submit">
          Add
        </button>
        <button
          className="ui_project__form__cancel"
          onClick={handleCancel}
          onKeyDown={handleCancel}
          type="button"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};
