import React from "react";
import "../scss/TableItem.scss";
import { FaEllipsisV } from "react-icons/fa";

const TableItem = ({ name, location, date, size }) => {
  return (
    <tr className="item">
      <td className="item__td">{name}</td>
      <td className="item__td">{location}</td>
      <td className="item__td">{date}</td>
      <td className="item__td">{size}</td>
      <td className="item__td">
        <FaEllipsisV />
      </td>
    </tr>
  );
};

export default TableItem;
