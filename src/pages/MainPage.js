import React from "react";
import "./scss/MainPage.scss";
import Navbar from "../components/Navbar";
import ListSection from "../components/mainComponents/ListSection";
import { FaPlus } from "react-icons/fa";

const MainPage = () => {
  return (
    <div className="mainPage">
      <Navbar activeLocation="home" />
      <ListSection name="Web development" />
      <ListSection name="Web development" />
      <div className="mainPage__button">
        <p className="mainPage__button__text">
          New note{" "}
          <span>
            <FaPlus />
          </span>
        </p>
      </div>
    </div>
  );
};

export default MainPage;
