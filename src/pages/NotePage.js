import React, { useState, useEffect, useCallback } from "react";
import "./scss/NotePage.scss";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import ReactQuill from "react-quill";
import { history, helper } from "../helpers";
import { homeActions } from "../redux/actions/homeData.action";
import Navbar from "../components/Navbar";
import {} from "../redux/types";

export const NotePage = () => {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [note, setNote] = useState({});
  const [isNewNote, setIsNewNote] = useState(true);
  const [saving, setSaving] = useState(false);
  const { notes, selectedTag } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  let pathname = history.location.pathname.split("/");
  let docId = pathname[pathname.length - 1];

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleText = (value) => {
    setText(value);
  };
  const handleDelete = () => {
    dispatch(homeActions.deleteNote(note.docId));
    history.push("/home");
  };

  const debounce = useCallback(
    helper.debounceEvent((_text, _title, _section, _docId) => {
      dispatch(
        homeActions.updateNote({
          text: _text,
          title: _title,
          section: _section,
          docId: _docId,
        })
      );
      setSaving(false);
    }, 5000),
    []
  );

  useEffect(() => {
    const findNote = (_docId) => {
      return notes.find((note) => note.docId === _docId);
    };
    if (docId === "newnote") {
      setIsNewNote(true);
      setNote({ docId: "newnote" });
    } else {
      if (helper.isObjectEmpty(notes)) {
        history.push("/home");
        return;
      }
      setIsNewNote(false);
      setNote(findNote(docId));
    }
  }, []);

  useEffect(() => {
    if (docId !== "newnote" && !helper.isObjectEmpty(note)) {
      setText(note.body);
      setTitle(note.title);
    }
  }, [note]);

  useEffect(() => {
    if (isNewNote) {
      if (text.trim() === "" && title.trim() === "") return;
      dispatch(homeActions.putNote({ text, title, section: selectedTag }));
      setIsNewNote(false);
    } else {
      if (note.docId === "newnote") {
        setNote({ section: selectedTag, docId: notes[notes.length - 1].docId });
        return;
      }
      if (note.body !== text) {
        setSaving(true);
        debounce(text, title, note.section, note.docId);
      }
    }
  }, [text]);

  return (
    <div className="notePage">
      <Navbar activeLocation="" />
      <div className="notePage__upperPart">
        <div className="notePage__upperPart__title">
          <p className="notePage__upperPart__title__p">Title:</p>
          <input
            className="notePage__upperPart__title__input"
            type="text"
            onChange={handleTitle}
            value={title}
          />
        </div>
        <p className="notePage__upperPart__saving">
          {saving ? "Saving..." : "Saved"}
        </p>
        {!isNewNote && (
          <div className="notePage__upperPart__delete">
            <button className="btn-delete" onClick={handleDelete}>
              Delete note
            </button>
          </div>
        )}
      </div>
      <div className="notePage__lowerPart">
        <ReactQuill
          theme="snow"
          value={text}
          onChange={handleText}
          placeholder="Press to insert text..."
        />
      </div>
    </div>
  );
};
