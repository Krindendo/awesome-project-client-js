import React from "react";
import "./scss/OldPage.scss";

const OldPage = () => {
  return (
    <div className="oldContainer">
      <div className="text">
        <h2 className="h2">ToDo:</h2>
        <h3 className="mt-4">1.0 - not secure</h3>
        <h3 className="mt-4">2.0 - reliable/secure</h3>
        <h4 className="ml-3">- 1 tekst 1 title, nema kategorija</h4>
        <h4 className="ml-3">- https://penzu.com/</h4>
        <h4 className="ml-3">- dodaj da mogu slike da se ubacuju</h4>
        <h4 className="ml-3">
          - https://bootstrapious.com/p/bootstrap-sidebar
        </h4>
        <h4 className="ml-3">
          - maybe https://bootstrapious.com/tutorial/sidebar/index3.html
        </h4>
        <h4 className="ml-3">- izmeni User u user i Title u title</h4>
        <h5 className="ml-3">
          -
          https://freestrategygame.firebaseio.com/user/us6djNE84xh1ik1GkXW90ETlWsP2/title/titleId
        </h5>
        <h4 className="ml-3">
          - unutra se cuva samo ovim redosledom, link, title, date, text
        </h4>
        <h3 className="mt-4">3.0 - Angular</h3>
        <h3 className="mt-4">4.0 - React</h3>
        <h4 className="ml-3">Bolji je React</h4>
      </div>
    </div>
  );
};

export default OldPage;
