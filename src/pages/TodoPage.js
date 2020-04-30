import React from "react";
import "./scss/TodoPage.scss";
import Navbar from "../components/Navbar";

const TodoPage = () => {
  return (
    <div className="todoPage">
      <Navbar activeLocation="todo" />
      <aside className="todoPage__sidebar"></aside>
      <section className="todoPage__content"></section>
    </div>
  );
};

export default TodoPage;
