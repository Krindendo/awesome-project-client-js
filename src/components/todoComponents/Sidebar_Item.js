import React from "react";
import "../scss/Sidebar_item.scss";
import { useSelector, useDispatch } from "react-redux";
import { SELECT_PROJECT } from "../../redux/types";
import { FaInbox, FaRegCalendarAlt, FaRegCalendar } from "react-icons/fa";

export const SidebarItem = ({ text }) => {
  const { name: active } = useSelector((state) => state.todo.selectedProject);
  const dispatch = useDispatch();
  const handleActive = () => {
    dispatch({ type: SELECT_PROJECT, payload: { name: text, id: "" } });
  };
  return (
    <li
      onClick={handleActive}
      className={
        active === text
          ? "sidebar__list__item active-item"
          : "sidebar__list__item"
      }
    >
      <span className="sidebar__list__item__icon">
        {text === "Today" ? (
          <FaInbox />
        ) : text === "Tomorrow" ? (
          <FaRegCalendar />
        ) : (
          <FaRegCalendarAlt />
        )}
      </span>
      <p
        className={
          active === text
            ? "sidebar__list__item__text active-text"
            : "sidebar__list__item__text"
        }
      >
        {text}
      </p>
    </li>
  );
};
