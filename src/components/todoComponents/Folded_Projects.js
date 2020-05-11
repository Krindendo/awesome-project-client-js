import React from "react";
import "../scss/Folded_Projects.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  SELECT_PROJECT,
  PROJECT_ID,
  UI_EDIT,
  UI_CONFORM,
} from "../../redux/types";
import { helper } from "../../helpers";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

export const FoldedProjects = () => {
  const projects = useSelector((state) => state.todo.projects);
  const dispatch = useDispatch();
  const { name: active } = useSelector((state) => state.todo.selectedProject);
  let check = helper.isObjectEmpty(projects);

  const handleSet = (docId, name, event) => {
    if (event.target.tagName === "svg" || event.target.tagName === "path") {
    } else {
      dispatch({ type: SELECT_PROJECT, payload: { name: name, id: docId } });
    }
  };
  const handleEdit = (docId) => {
    dispatch({ type: PROJECT_ID, payload: docId });
    dispatch({ type: UI_EDIT });
  };
  const handleDelete = (docId) => {
    dispatch({ type: PROJECT_ID, payload: docId });
    dispatch({ type: UI_CONFORM });
  };
  return (
    <ul className="foldedProjects">
      {!check &&
        projects.map((project) => (
          <li
            key={project.docId}
            className={
              active === project.docId
                ? "foldedProjects__item activeItem"
                : "foldedProjects__item"
            }
            onClick={(event) => handleSet(project.docId, project.name, event)}
          >
            <div
              className={
                active === project.docId
                  ? "foldedProjects__item__title activeText"
                  : "foldedProjects__item__title"
              }
            >
              <p className="">{project.name}</p>
            </div>
            <div className="foldedProjects__item__icons">
              <span
                className="foldedProjects__item__icons__icon"
                onClick={() => handleEdit(project.docId)}
              >
                <FaEdit />
              </span>
              <span
                className="foldedProjects__item__icons__icon"
                onClick={() => handleDelete(project.docId)}
              >
                <FaTrashAlt />
              </span>
            </div>
          </li>
        ))}
    </ul>
  );
};
