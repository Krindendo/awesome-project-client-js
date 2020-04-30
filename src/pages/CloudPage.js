import React from "react";
import "./scss/Cloud.scss";
import Navbar from "../components/Navbar";

const CloudPage = () => {
  return (
    <div className="mainPage">
      <Navbar activeLocation="cloud" />
    </div>
  );
};

export default CloudPage;
