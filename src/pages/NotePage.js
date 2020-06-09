import React, { useState, useEffect, useCallback } from "react";
import "./scss/NotePage.scss";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import ReactQuill from "react-quill";
import { history, helper } from "../helpers";
import { homeActions } from "../redux/actions/homeData.action";
import Navbar from "../components/Navbar";

const NotePage = () => {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [note, setNote] = useState({});
  const [length, setLength] = useState(0);
  const [isNewNote, setIsNewNote] = useState(true);
  const [saving, setSaving] = useState(false);
  const [docId, setDocId] = useState("");
  const { notes, selectedTag } = useSelector((state) => state.home);
  const dispatch = useDispatch();

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
  const findNote = (_docId) => notes.find((note) => note.docId === _docId);

  const debounce = useCallback(
    helper.debounceEvent((text, title, section, docId) => {
      dispatch(homeActions.updateNote({ text, title, section, docId }));
      setSaving(false);
    }, 5000),
    []
  );

  useEffect(() => {
    let pathname = history.location.pathname.split("/");
    const _docId = pathname[pathname.length - 1];
    setLength(Object.keys(notes).length);
    setDocId(_docId);
    if (_docId === "newnote") setIsNewNote(true);
    else {
      if (helper.isObjectEmpty(notes)) history.push("/home");
      const _note = findNote(_docId);
      setNote(_note);
      setText(_note.body);
      setTitle(_note.title);
      setIsNewNote(false);
    }
  }, []);

  useEffect(() => {
    console.log("length", Object.keys(notes).length);
    if (Object.keys(notes).length === length + 1) {
      setIsNewNote(false);
      setNote(notes[length]);
      setLength(notes.length);
      setSaving(false);
    }
  }, [notes]);

  useEffect(() => {
    if (isNewNote) {
      if (saving || text.trim() === "" || title.trim() === "") return;
      dispatch(
        homeActions.putNote({ body: text, title: title, section: selectedTag })
      );
      setSaving(true);
    } else {
      if (helper.isObjectEmpty(note) || !note.docId) return;
      if (note.body !== text || note.title !== title) {
        setSaving(true);
        debounce(text, title, note.section, note.docId);
      }
    }
  }, [text, title]);

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
          {isNewNote ? "" : saving ? "Saving..." : "Saved"}
        </p>
        {!isNewNote && !saving && (
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

export default NotePage;
