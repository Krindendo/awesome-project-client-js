import React from "react";
import "../scss/Tasks.scss";
import { useSelector } from "react-redux";
import { ListOfTasks } from "./index";
import { helper } from "../../helpers";

export const Tasks = () => {
  const tasks = useSelector((state) => state.todo.tasks);
  const { name } = useSelector((state) => state.todo.selectedProject);
  let check = helper.isObjectEmpty(tasks);
  return (
    <div className="tasks">
      <h2 className="tasks__title">{name}</h2>
      <ul className="tasks__list">
        {!check &&
          tasks.map((task) => <ListOfTasks key={task.id} data={task} />)}
      </ul>
    </div>
  );
};
