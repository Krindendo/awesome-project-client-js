import React, { useState } from "react";
import "../scss/Sidebar.scss";
import { FaChevronDown } from "react-icons/fa";
import { FoldedProjects, FoldedFilters, SidebarItem } from "../todoComponents";

export const Sidebar = () => {
  const [active, setActive] = useState("Today");
  const [showProjects, setShowProjects] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const handleActive = (_active) => {
    setActive(_active);
  };

  const handleShowProject = () => {
    setShowProjects(!showProjects);
  };
  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  };
  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        <SidebarItem handle={handleActive} active={active} text="Today" />
        <SidebarItem handle={handleActive} active={active} text="Tomorrow" />
        <SidebarItem handle={handleActive} active={active} text="Upcoming" />
      </ul>
      <div className="sidebar__mid">
        <hr className="hr" />
        <div
          tabIndex={0}
          role="button"
          onKeyDown={handleShowProject}
          onClick={handleShowProject}
          className="sidebar__mid__title"
        >
          <span className="sidebar__mid__title__icon">
            <FaChevronDown
              className={
                showProjects
                  ? "hidden-projects"
                  : "sidebar__mid__title__icon__svg"
              }
            />
          </span>
          <p className="sidebar__mid__title__text">Projects</p>
        </div>
        {showProjects ? <FoldedProjects /> : null}
      </div>
      <div className="sidebar__mid">
        <hr className="hr" />
        <div
          tabIndex={0}
          role="button"
          onKeyDown={handleShowFilter}
          onClick={handleShowFilter}
          className="sidebar__mid__title"
        >
          <span className="sidebar__mid__title__icon">
            <FaChevronDown
              className={
                showFilter
                  ? "hidden-projects"
                  : "sidebar__mid__title__icon__svg"
              }
            />
          </span>
          <p className="sidebar__mid__title__text">Filters</p>
        </div>
        {showFilter ? <FoldedFilters /> : null}
      </div>
    </div>
  );
};
