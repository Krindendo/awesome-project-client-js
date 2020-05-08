import React from "react";
import "../scss/Sidebar_item.scss";
import { FaInbox, FaRegCalendarAlt, FaRegCalendar } from "react-icons/fa";

const SidebarItem = ({ handle, active, text }) => {
  console.log("active", active);
  console.log("text", text);
  return (
    <li
      onClick={() => handle(text)}
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

export default SidebarItem;
