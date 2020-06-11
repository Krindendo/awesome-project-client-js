import React, { useState } from "react";
import "../scss/Sidebar.scss";
import { FaChevronDown } from "react-icons/fa";
import {
  FoldedProjects,
  FoldedFilters,
  SidebarItem,
  AddProject,
} from "../todoComponents";

export const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const handleShowProject = () => {
    setShowProjects(!showProjects);
  };
  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  };
  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        <SidebarItem text="Today" />
        <SidebarItem text="Tomorrow" />
        <SidebarItem text="Upcoming" />
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
        {showProjects && <FoldedProjects />}
        {showProjects && <AddProject />}
      </div>
      {false && (
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
          {showFilter && <FoldedFilters />}
        </div>
      )}
    </div>
  );
};
