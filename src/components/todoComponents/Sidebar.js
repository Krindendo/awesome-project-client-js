import React, { useState } from "react";
import "../scss/Sidebar.scss";
import { FaChevronDown } from "react-icons/fa";
import Folded_Projects from "./Folded_Projects";
import Folded_Filters from "./Folded_Filters";
import Sidebar_Item from "./Sidebar_Item";

const Sidebar = () => {
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
        <Sidebar_Item handle={handleActive} active={active} text="Today" />
        <Sidebar_Item handle={handleActive} active={active} text="Tomorrow" />
        <Sidebar_Item handle={handleActive} active={active} text="Upcoming" />
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
        {showProjects ? <Folded_Projects /> : null}
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
        {showFilter ? <Folded_Filters /> : null}
      </div>
    </div>
  );
};

export default Sidebar;
