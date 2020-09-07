import React from "react";
import "./tool.css";

const Tool = ({ img, title, desc }) => {
  return (
    <div className="tool container">
      <img src={img} alt={title} />
      <div className="description">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Tool;
