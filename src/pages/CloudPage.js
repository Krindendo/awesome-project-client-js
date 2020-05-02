import React, { useState, useEffect } from "react";
import "./scss/CloudPage.scss";
import Navbar from "../components/Navbar";
import DragDrop from "../components/todoComponents/DragDrop";
import TableItem from "../components/TableItem";

const CloudPage = () => {
  const handleUpload = (event) => {
    console.log(event.target.files[0]);
  };
  const handleDropfile = (file) => {
    console.log(file);
  };
  return (
    <div className="cloudPage">
      <Navbar activeLocation="cloud" />
      <DragDrop handleDropfile={handleDropfile}>
        <div className="grid">
          <section className="grid__upload">
            <h2 className="grid__upload__title">Upload your file</h2>
            <div className="grid__upload__uploadButton">
              <label
                htmlFor="file-upload"
                className="grid__upload__uploadButton__input"
              >
                <p>Select your file</p>
              </label>
              <input
                id="file-upload"
                type="file"
                name="file"
                onChange={handleUpload}
              />
              <p className="grid__upload__uploadButton__text">
                or drop file here
              </p>
            </div>
          </section>
          <table className="grid__table">
            <thead className="grid__table__thead">
              <tr className="grid__table__thead__tr">
                <th className="grid__table__thead__tr__th">File name</th>
                <th className="grid__table__thead__tr__th">Location</th>
                <th className="grid__table__thead__tr__th disable">Added</th>
                <th className="grid__table__thead__tr__th disable">
                  File size
                </th>
                <th className="grid__table__thead__tr__th"></th>
              </tr>
            </thead>
            <tbody className="grid__table__tbody">
              <TableItem
                name="Nesto"
                location="Zanimljivo"
                date="01.05.2020"
                size="340kb"
              />
              <TableItem
                name="Nesto"
                location="Zanimljivo"
                date="01.05.2020"
                size="340kb"
              />
            </tbody>
          </table>
        </div>
      </DragDrop>
    </div>
  );
};

export default CloudPage;

// https://programmingwithmosh.com/javascript/react-file-upload-proper-server-side-nodejs-easy/
// https://www.freepik.com/premium-psd/file-downloader-application_5841449.htm
// https://codepen.io/PerfectIsShit/pen/zogMXP Loading
