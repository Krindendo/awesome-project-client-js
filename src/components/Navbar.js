import React from "react";
import { Link } from "react-router-dom";
import "./scss/Navbar.scss";

const Navbar = ({ activeLocation }) => {
  return (
    <header className="navbar">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__list__item">
            <button
              className={
                activeLocation === "home"
                  ? "nav__list__item__button active"
                  : "nav__list__item__button"
              }
            >
              <Link className="nav__list__item__button__link" to="/home">
                <p className="p">AwesomeProject v4</p>
              </Link>
            </button>
          </li>
          <li className="nav__list__item">
            <button
              className={
                activeLocation === "todo"
                  ? "nav__list__item__button active"
                  : "nav__list__item__button"
              }
            >
              <Link className="nav__list__item__button__link" to="/todo">
                <p className="p">To do</p>
              </Link>
            </button>
          </li>
          <li className="nav__list__item">
            <button
              className={
                activeLocation === "cloud"
                  ? "nav__list__item__button active"
                  : "nav__list__item__button"
              }
            >
              <Link className="nav__list__item__button__link" to="/cloud">
                <p className="p">Cloud</p>
              </Link>
            </button>
          </li>
        </ul>
      </nav>
      <div className="message">
        Welcome back, <span className="message__name">Krindendo</span>
      </div>
    </header>
  );
};

export default Navbar;
