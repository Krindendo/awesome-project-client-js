import React from "react";
import "../scss/ListOfTasks.scss";
import { FaCheck } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { todoActions } from "../../redux/actions/todoData.action";

export const ListOfTasks = ({ data }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log("delete", data);
    dispatch(todoActions.deleteTask(data.id));
  };
  return (
    <li className="listOfTasks">
      <hr className="listOfTasks__hr" />
      <div
        className="listOfTasks__checkbox-holder"
        onClick={handleDelete}
        onKeyDown={handleDelete}
        role="button"
      >
        <span className="listOfTasks__checkbox-holder__checkbox">
          <div className="listOfTasks__checkbox-holder__checkbox__chack">
            <FaCheck />
          </div>
        </span>
      </div>
      <p className="listOfTasks__text">{data.task}</p>
    </li>
  );
};
