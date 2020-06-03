import React, { useState, useEffect } from "react";
import "./scss/MainPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { homeActions } from "../redux/actions/homeData.action";
import { history } from "../helpers";
import Navbar from "../components/Navbar";
import ListSection from "../components/mainComponents/ListSection";
import { FaPlus } from "react-icons/fa";
import { SELECT_TAG } from "../redux/types";

const MainPage = () => {
  const [grayScreen, setGrayScreen] = useState(false);
  const [selectedTag, setSelectedTag] = useState(0);
  const { tags, notes } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  const getNotesbyTags = (id) => {
    return notes.filter((note) => note.section === id);
  };

  const hadnleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: SELECT_TAG, payload: selectedTag });
    handleNewNote(false);
    history.push("/home/newnote");
  };
  const handleChange = (tag) => {
    setSelectedTag(tag);
  };
  const handleNewNote = (boolean) => {
    setGrayScreen(boolean);
  };

  const disable = (event) => {
    if (event.target.className === "grid") {
      handleNewNote(false);
    }
  };

  useEffect(() => {
    dispatch(homeActions.getTags());
    dispatch(homeActions.getNotes());
  }, []);
  return (
    <div className="mainPage">
      <Navbar activeLocation="home" />
      {!!tags.length &&
        !!notes.length &&
        tags.map((tag) => (
          <ListSection
            key={tag._id}
            title={tag.name}
            notes={getNotesbyTags(tag._id)}
          />
        ))}
      <div className="mainPage__newNote" onClick={() => handleNewNote(true)}>
        <p className="mainPage__newNote__text">
          New note{" "}
          <span>
            <FaPlus />
          </span>
        </p>
      </div>
      {grayScreen && (
        <div className="grayScreen" onClick={() => handleNewNote(false)} />
      )}
      {grayScreen && (
        <div className="grid" onClick={disable}>
          <div className="grid__notes">
            <p className="grid__notes__title">Select Project</p>
            <form className="form" onSubmit={hadnleSubmit}>
              <ul className="form__list">
                {!!tags.length &&
                  tags.map((tag) => (
                    <li key={tag._id} className="form__list__item">
                      <input
                        className="form__list__item__input"
                        type="radio"
                        name="tag"
                        id={tag._id}
                        value={tag._id}
                        defaultChecked={tag._id === selectedTag}
                        onChange={() => handleChange(tag._id)}
                      />
                      <label
                        className="form__list__item__name"
                        htmlFor={tag._id}
                      >
                        {tag.name}
                      </label>
                    </li>
                  ))}
              </ul>
              <div className="form__buttons">
                <button className="form__buttons__submit" type="submit">
                  Next
                </button>
                <button
                  className="form__buttons__cancel"
                  type="button"
                  onClick={() => handleNewNote(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
