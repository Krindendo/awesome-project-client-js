import React from "react";
import "./scss/MainPage.scss";
import Navbar from "../components/Navbar";

const MainPage = () => {
  return (
    <div className="mainPage">
      <Navbar activeLocation="home" />
    </div>
  );
};

export default MainPage;
