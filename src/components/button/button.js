import React from "react";
import "./btn.css";

const Btn = ({ title, cls }) => (
    <button className={`drawing-btn ${cls}`}><p>{title}</p></button>
);

export default Btn;