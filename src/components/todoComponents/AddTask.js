import React, { useState } from "react";
import "../scss/AddTask.scss";
import { UiTask } from "./index";

export const AddTask = () => {
  const [ui_Task, setUiTask] = useState(true);
  const handleClick = (_boolean) => {
    setUiTask(_boolean);
  };
  return (
    <div className="addTask">
      <hr />
      {ui_Task && (
        <div className="inTask">
          <span className="plus">+</span>
          <span
            className="text"
            onClick={() => handleClick(false)}
            onKeyDown={() => handleClick(false)}
            role="button"
            tabIndex={0}
          >
            Add Task
          </span>
        </div>
      )}
      {!ui_Task && <UiTask handle={handleClick} />}
    </div>
  );
};
