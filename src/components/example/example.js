import React from "react";
import "./example.css";

import Btn from "../button/button";

function Example({ img, title, desc, link , notice }) {
  return (
    <div className="example">
      <a target="_blank" rel="noopener noreferrer" href={link}>
        <img src={img} alt="" />
      </a>
      <h4>{title}</h4>
      <p>{desc}</p>
      <p className="notice">{notice}</p>
      <div className="lin">
        <a target="_blank" rel="noopener noreferrer" href={link}>
          <Btn title="Visit Site" cls="btr" />
        </a>
      </div>
    </div>
  );
}

export default Example;
