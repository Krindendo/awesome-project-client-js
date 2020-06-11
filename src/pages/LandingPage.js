import React, { useState, useEffect } from "react";
import "./scss/LandingPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../redux/actions/user.action";
import { UI_RESET } from "../redux/types";
import { FaSpinner } from "react-icons/fa";

const LandingPage = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;
  const [register, setRegister] = useState({
    nick: "",
    emaill: "",
    passwordd: "",
    passwordd_conform: "",
  });
  const { nick, emaill, passwordd, passwordd_conform } = register;
  const [ui_Login, setUi_Login] = useState(true);
  const loading = useSelector((state) => state.ui.loading);
  const errors = useSelector((state) => state.ui.errors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.logout());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };
  const handleChange_Register = (e) => {
    const { name, value } = e.target;
    setRegister((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email && password) {
      dispatch(userActions.login(email, password));
    }
  };

  const handleAnonymous = (event) => {
    event.preventDefault();
    dispatch(userActions.login_anonymous());
  };

  const handleLogin = () => {
    dispatch({ type: UI_RESET });
    setInputs({ ...inputs, password: "" });
    setUi_Login(!ui_Login);
  };
  return (
    <div className="landingPage">
      <div className="leftSide">
        <div className="leftSide__insideBox">
          <h1 className="leftSide__insideBox__logo">Awesome Project</h1>
          {ui_Login && (
            <form
              className="leftSide__insideBox__form"
              noValidate
              onSubmit={handleSubmit}
            >
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                className={errors.email ? "input error" : "input"}
                value={email}
                onChange={handleChange}
              />
              <label className="label" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                className={errors.email ? "input error" : "input"}
                value={password}
                onChange={handleChange}
              />
              <button type="submit" className="submit">
                {loading ? (
                  <span className="submit__spinner">
                    <FaSpinner />
                  </span>
                ) : (
                  <p className="submit__p">Log in</p>
                )}
              </button>
              <div className="leftSide__insideBox__form__options">
                <label className="remeber">
                  Remember Me
                  <input type="checkbox" className="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <button type="button" className="forgot">
                  Forgot Password?
                </button>
              </div>
              <hr className="hr" />
              <div className="leftSide__insideBox__form__bottom">
                <button
                  type="button"
                  className="anonymous"
                  onClick={handleAnonymous}
                >
                  Anonymous login
                </button>
                <button
                  type="button"
                  className="register"
                  onClick={handleLogin}
                >
                  Register New User?
                </button>
              </div>
            </form>
          )}
          {!ui_Login && (
            <form className="leftSide__insideBox__form">
              <label className="label padding" htmlFor="nick">
                Nick
              </label>
              <input
                type="text"
                name="nick"
                className="input"
                value={nick}
                onChange={handleChange_Register}
              />
              <label className="label padding" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="input"
                value={emaill}
                onChange={handleChange_Register}
              />
              <label className="label padding" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="input"
                value={passwordd}
                onChange={handleChange_Register}
              />
              <label className="label padding" htmlFor="password-conform">
                Conform Password
              </label>
              <input
                type="password"
                name="password-conform"
                className="input"
                value={passwordd_conform}
                onChange={handleChange_Register}
              />
              <button type="button" className="back" onClick={handleLogin}>
                Back to Login User
              </button>
              <p className="forbidden">
                It is not posible to register, personal use only
              </p>
            </form>
          )}
          {errors.general && <p className="error__general">{errors.general}</p>}
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
                This is React web application with proper user login. You can
                upload your files, tasks and notes. This web app is build using
                Firebase api and NoSQL. If you want to try this web app, press
                Anonymous login.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
