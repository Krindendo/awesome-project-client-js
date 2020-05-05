import React from "react";
import "./scss/LandingPage.scss";

export const LandingPage = () => {
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
            <div className="rightSide__insideBox__shade__content">
              <h2 className="rightSide__insideBox__shade__content__title">
                Welcome to{" "}
                <span className="rightSide__insideBox__shade__content__title__span">
                  Awesome Project
                </span>
              </h2>
              <hr className="hr" />
              <p className="rightSide__insideBox__shade__content__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis similique temporibus ad velit nesciunt distinctio,
                repudiandae est eos? Rerum tenetur, architecto non minus dolore
                voluptas dolorem aspernatur quasi hic commodi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
