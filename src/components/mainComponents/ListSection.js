import React from "react";
import "../scss/ListSection.scss";
import Card from "./Card";
import { helper, history } from "../../helpers";

const ListSection = ({ title, notes }) => {
  var isEmpty = notes.length !== 0;
  const handleNote = (note) => {
    history.push(`/home/${note.docId}`);
  };
  return (
    <span>
      {isEmpty && (
        <section className="list">
          <h2 className="list__title">
            <span className="list__title__span">{title}</span>
          </h2>
          <div className="list__grid">
            {notes.map((note) => (
              <Card
                key={note.docId}
                title={note.title}
                text={helper.removeHTMLTags(note.body.substring(0, 30)) + "..."}
                date={helper.changeDate(note.created)}
                note={note}
                handle={handleNote}
              />
            ))}
          </div>
        </section>
      )}
    </span>
  );
};

export default ListSection;
