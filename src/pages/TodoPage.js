import React from "react";
import "./scss/TodoPage.scss";
import Navbar from "../components/Navbar";
import Sidebar from "../components/todoComponents/Sidebar";
import Tasks from "../components/todoComponents/Tasks";

const TodoPage = () => {
  return (
    <div className="todoPage">
      <Navbar activeLocation="todo" />
      <aside className="todoPage__sidebar">
        <Sidebar />
      </aside>
      <section className="todoPage__content">
        <Tasks />
      </section>
    </div>
  );
};

export default TodoPage;
