import React from "react";
import "../scss/Tasks.scss";
import { useSelector } from "react-redux";
import { ListOfTasks, AddTask } from "./index";
import { getTasksByProject } from "../../helpers";

export const Tasks = () => {
  const { tasks, selectedProject } = useSelector((state) => state.todo);
  const { name } = selectedProject;
  let sortedTasks = getTasksByProject(tasks, selectedProject);
  return (
    <div className="tasks">
      <h2 className="tasks__title">{name}</h2>
      <ul className="tasks__list">
        {!!sortedTasks &&
          sortedTasks.map((task) => <ListOfTasks key={task.id} data={task} />)}
        <AddTask />
      </ul>
    </div>
  );
};
