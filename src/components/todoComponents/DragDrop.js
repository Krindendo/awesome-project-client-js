import React, { useState, useEffect } from "react";
import "../scss/DragDrop.scss";

const DragDrop = ({ handleDropfile, children }) => {
  const [dragging, setDragging] = useState(false);
  var dragCounter = 0;
  const dropRef = React.createRef();

  const handleDragIn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter++;
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDragging(true);
    }
  };
  const handleDragOut = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter--;
    if (dragCounter > 0) return;
    setDragging(false);
  };
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleDropfile(e.dataTransfer.files);
      e.dataTransfer.clearData();
      dragCounter = 0;
    }
  };

  useEffect(() => {
    let div = dropRef.current;
    div.addEventListener("dragenter", handleDragIn);
    div.addEventListener("dragleave", handleDragOut);
    div.addEventListener("dragover", handleDrag);
    div.addEventListener("drop", handleDrop);
    return () => {
      div.removeEventListener("dragenter", handleDragIn);
      div.removeEventListener("dragleave", handleDragOut);
      div.removeEventListener("dragover", handleDrag);
      div.removeEventListener("drop", handleDrop);
    };
  }, []);
  return (
    <div className="dragDrop" ref={dropRef}>
      {children}
      {dragging ? (
        <div className="dragDrop__drophere">
          <p className="dragDrop__drophere__text">Drop Here</p>
        </div>
      ) : null}
    </div>
  );
};

export default DragDrop;

// https://medium.com/@650egor/simple-drag-and-drop-file-upload-in-react-2cb409d88929
