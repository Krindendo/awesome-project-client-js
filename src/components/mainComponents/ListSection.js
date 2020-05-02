import React from "react";
import "../scss/ListSection.scss";
import Card from "./Card";

const ListSection = ({ name }) => {
  return (
    <section className="list">
      <h2 className="list__title">
        <span className="list__title__span">{name}</span>
      </h2>
      <div className="list__grid">
        <Card title="Title" text="text" date="20.03.2019" />
        <Card title="Title" text="text" date="20.03.2019" />
        <Card title="Title" text="text" date="20.03.2019" />
        <Card title="Title" text="text" date="20.03.2019" />
      </div>
    </section>
  );
};

export default ListSection;
