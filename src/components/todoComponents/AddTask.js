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
      <hr className="addTask__hr" />
      {ui_Task && (
        <div
          className="addTask__div"
          onClick={() => handleClick(false)}
          onKeyDown={() => handleClick(false)}
          role="button"
          tabIndex={0}
        >
          <span className="plus">+</span>
          <span className="text">Add Task</span>
        </div>
      )}
      {!ui_Task && <UiTask handle={handleClick} />}
    </div>
  );
};
