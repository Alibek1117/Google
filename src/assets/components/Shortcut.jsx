import React, { useEffect, useRef } from "react";
import "./Shortcut.scss";

const Shortcut = ({ setShortModal, setObj }) => {
  const name = useRef(null);
  const url = useRef();

  const handleDone = (e) => {
    e.preventDefault();
    setObj({
      name: name.current.value,
      url: url.current.value,
    });
    setShortModal(false);
  };

  return (
    <div className="back-drow-shortcut">
      <div className="inner">
        <form className="shortcut">
          <div className="title">Add shortcut</div>
          <label>
            <span>Name</span>
            <input type="text" ref={name} />
          </label>
          <label>
            <span>URL</span>
            <input type="text" ref={url} />
          </label>
          <div className="btns">
            <div
              className="cancel"
              onClick={() => {
                setShortModal(false);
              }}
            >
              Cancel
            </div>
            <button className="done" onClick={handleDone}>
              Done
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Shortcut;
