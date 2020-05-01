import React from "react";
import "../scss/Sidebar.scss";
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        <li className="sidebar__list__item active-item">
          <span className="sidebar__list__item__icon">
            <FaInbox />
          </span>
          <p className="sidebar__list__item__text active-text">Today</p>
        </li>
        <li className="sidebar__list__item">
          <span className="sidebar__list__item__icon">
            <FaRegCalendar />
          </span>
          <p className="sidebar__list__item__text">Tomorrow</p>
        </li>
        <li className="sidebar__list__item">
          <span className="sidebar__list__item__icon">
            <FaRegCalendarAlt />
          </span>
          <p className="sidebar__list__item__text">Upcoming</p>
        </li>
      </ul>
      <div className="sidebar__mid">
        <hr className="hr" />
        <div className="sidebar__mid__title">
          <span className="sidebar__mid__title__icon">
            <FaChevronDown className="sidebar__mid__title__icon__svg" />
          </span>
          <p className="sidebar__mid__title__text">Projects</p>
        </div>
        <div className="sidebar__mid__dropmanu"></div>
      </div>
      <div className="sidebar__mid">
        <hr className="hr" />
        <div className="sidebar__mid__title">
          <span className="sidebar__mid__title__icon">
            <FaChevronDown className="sidebar__mid__title__icon__svg" />
          </span>
          <p className="sidebar__mid__title__text">Filters</p>
        </div>
        <div className="sidebar__mid__dropmanu"></div>
      </div>
    </div>
  );
};

export default Sidebar;
