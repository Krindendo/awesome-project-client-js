import React from "react";
import "../scss/Folded_Filters.scss";

const FoldedFilters = () => {
  return (
    <div className="foldedFilters">
      <ul className="foldedFilters__list">
        <li className="foldedFilters__list__item">Priority High</li>
        <li className="foldedFilters__list__item">Priority Medium</li>
        <li className="foldedFilters__list__item">Priority Low</li>
        <li className="foldedFilters__list__item">Priority Normal</li>
      </ul>
    </div>
  );
};

export default FoldedFilters;
