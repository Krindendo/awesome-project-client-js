import React from "react";
import "./scss/LandingPage.scss";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <div className="leftSide">
        <div className="leftSide__insideBox">
          <p>nesto</p>
        </div>
      </div>
      <div className="rightSide">
        <div className="rightSide__insideBox">
          <div className="rightSide__insideBox__shade">
            <div className="rightSide__insideBox__shade__content"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
