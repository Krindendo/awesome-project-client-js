import React, { useState } from "react";
import "./scss/TableItem.scss";
import { FaEllipsisV } from "react-icons/fa";

const TableItem = ({
  docId,
  name,
  location,
  date,
  size,
  handleDelete,
  handleEdit,
}) => {
  const [active, setActive] = useState(false);
  const handleDropBox = () => {
    setActive(!active);
  };
  return (
    <tr className="item">
      <td className="item__td">{name}</td>
      <td className="item__td">{location}</td>
      <td className="item__td disable">{date}</td>
      <td className="item__td disable">{size}</td>
      <td className="item__td">
        <div className="item__td__dropdown" onClick={handleDropBox}>
          <FaEllipsisV />
          <div className={active ? "item__td__dropdown__content" : "disable"}>
            <button
              className="item__td__dropdown__content__button"
              onClick={() => handleDelete(docId)}
            >
              Delete
            </button>
            <button
              className="item__td__dropdown__content__button disable-button"
              onClick={handleEdit}
            >
              Rename
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default TableItem;
