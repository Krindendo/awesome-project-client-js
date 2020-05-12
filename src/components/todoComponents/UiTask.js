import React, { useState } from "react";
import "../scss/UiTask.scss";
import { useSelector, useDispatch } from "react-redux";
import { UI_RESET } from "../../redux/types";
import { todoActions } from "../../redux/actions/todoData.action";

export const UiTask = ({ handle }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const { id: projectId } = useSelector((state) => state.todo.selectedProject);
  const dispatch = useDispatch();

  const handleTask = (event) => {
    setTask(event.target.value);
  };
  const handleDate = (event) => {
    setDate(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let Task = {
      task: task,
      date: Date.parse(date),
      projectId: projectId,
    };
    handle(true);
    dispatch(todoActions.saveTask(Task));
    dispatch({ type: UI_RESET });
  };

  const handleCancel = () => {
    dispatch({ type: UI_RESET });
    setTask("");
    setDate("");
  };
  return (
    <div className="uiTask">
      <form className="uiTask__form" noValidate onSubmit={handleSubmit}>
        <label className="uiTask__form__label" htmlFor="task">
          task
        </label>
        <input
          className="uiTask__form__input"
          type="text"
          name="task"
          value={task}
          onChange={handleTask}
        />
        <label className="label" htmlFor="uiTask__form__label">
          date
        </label>
        <input
          className="uiTask__form__input"
          type="date"
          name="date"
          value={date}
          onChange={handleDate}
        />
        <div className="uiTask__form__button">
          <button type="submit" className="uiTask__form__button__add">
            Add Task
          </button>
          <button
            onClick={handleCancel}
            onKeyDown={handleCancel}
            type="button"
            className="cancel"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
