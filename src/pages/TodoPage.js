import React, { useState, useEffect } from "react";
import "./scss/TodoPage.scss";
import Navbar from "../components/Navbar";
import {
  Sidebar,
  Tasks,
  UiProject,
  UiEdit,
  UiConform,
} from "../components/todoComponents";
import { todoActions } from "../redux/actions/todoData.action";
import { useSelector, useDispatch } from "react-redux";
import { UI_RESET } from "../redux/types";

export const TodoPage = () => {
  const [selectedProjectId, setSelectedProjectId] = useState();
  const ui_screen = useSelector((state) => state.ui.ui_screen);
  const { ui_grayScreen, ui_Project, ui_Edit, ui_Conform } = ui_screen;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todoActions.loadProjects());
  }, []);

  const showGray = () => {
    dispatch({ type: UI_RESET });
  };
  const disable = (event) => {
    if (event.target.className === "grid") dispatch({ type: UI_RESET });
  };

  return (
    <div className="todoPage">
      {ui_grayScreen && (
        <div className="todoPage__grayScreen" onClick={showGray}></div>
      )}
      {ui_grayScreen && (
        <div className="todoPage__grid" onClick={disable}>
          {ui_Project && <UiProject />}
          {ui_Edit && <UiEdit id={selectedProjectId} />}
          {ui_Conform && <UiConform id={selectedProjectId} />}
        </div>
      )}
      <Navbar activeLocation="todo" />
      <aside className="todoPage__sidebar">
        <Sidebar />
      </aside>
      <section className="todoPage__content">
        <Tasks />
      </section>
    </div>
  );
};
