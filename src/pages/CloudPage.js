import React, { useState, useEffect } from "react";
import "./scss/CloudPage.scss";
import Navbar from "../components/Navbar";
import DragDrop from "../components/DragDrop";
import TableItem from "../components/TableItem";
import { useDispatch, useSelector } from "react-redux";
import { cloudActions } from "../redux/actions/cloudData.action";
import { helper } from "../helpers";

const CloudPage = () => {
  const files = useSelector((state) => state.cloud.files);
  var formData = new FormData();
  const dispatch = useDispatch();
  const handleUpload = (event) => {
    formData.append("file", event.target.files[0]);
    dispatch(cloudActions.uploadFile(formData));
  };
  const handleDropfile = (file) => {
    formData.append("file", file[file.length - 1]);
    dispatch(cloudActions.uploadFile(formData));
  };
  const handleDelete = (fileId) => {
    dispatch(cloudActions.deleteFile(fileId));
  };
  const handleEdit = (event) => {
    console.log("Edit button clicked");
  };
  useEffect(() => {
    dispatch(cloudActions.getListOfFiles());
  }, []);
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
          {!!files.length && (
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
                {files.map((file) => (
                  <TableItem
                    key={file.docId}
                    docId={file.docId}
                    name={file.name}
                    location={file.path}
                    date={helper.changeDate(file.created)}
                    size={file.size}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                  />
                ))}
              </tbody>
            </table>
          )}
        </div>
      </DragDrop>
    </div>
  );
};

export default CloudPage;

// https://programmingwithmosh.com/javascript/react-file-upload-proper-server-side-nodejs-easy/
// https://www.freepik.com/premium-psd/file-downloader-application_5841449.htm
// https://codepen.io/PerfectIsShit/pen/zogMXP Loading

/* 
  <TableItem
    name="Nesto"
    location="Zanimljivo"
    date="01.05.2020"
    size="340kb"
  />
*/
