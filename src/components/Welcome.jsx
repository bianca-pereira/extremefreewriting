import React, { useState, useEffect } from "react";
import WriteButton from "./WriteButton";
import Space from "./Space";
import classNames from "classnames";
import { Link } from "react-router-dom";

const Banner = () => {
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);

  const innerClasses = classNames("inner", { closed, visible });

  useEffect(() => {
    if (!visible) {
      setTimeout(() => setVisible(true), 500);
    }
  }, [visible]);

  const handleClose = (e) => {
    e.preventDefault();
    setClosed(true);
  };

  return (
    <div className="Banner">
      <a
        className={innerClasses}
        href="https://biancapereira.gumroad.com/l/active-note-taking-selfpaced"
        target="_blank"
        rel="noopener noreferrer"
      >
        Want to learn other note-taking methods? Check out the&nbsp;
        <strong>
          <span className="red">Active Note-Taking Course</span>
        </strong>
        .
        <div className="close" onClick={handleClose}>
          ✚
        </div>
      </a>
    </div>
  );
};

const Welcome = () => (
  <div className="Welcome">
    <Banner />
    <Space xl />
    <div>
      <div className="logo">
        <h1>
          <span></span>
          <span>Extreme</span>
          <span>Freewriting</span>
        </h1>
      </div>
      <Space xl />
      <h2>
        Don’t stop typing, or all progress will be lost.
        <i className="caret icon-cursor" />
      </h2>
      <Space xl />
      <WriteButton ghost color="red" />
    </div>
  </div>
);

export default Welcome;
