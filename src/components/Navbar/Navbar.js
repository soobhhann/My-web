import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Navbar = () => {
  const [Title, setTitle] = useState("S.E");
  const [Toggle, setToggle] = useState("burger");
  const [Show, setShow] = useState("nav-ul show");
  const [Anim, setAnim] = useState("");

  const dist = (e) => {
    switch (e.target.className) {
      case "burger":
        return (
          setToggle("burger toggle") + setShow("nav-ul") + setAnim("showing")
        );

      case "burger toggle":
        return setToggle("burger") + setShow("nav-ul show") + setAnim("");
      default:
        return Toggle;
    }
  };

  return (
    <nav className="menu">
      <div className="container">
        <div onClick={(e) => dist(e)} className={Toggle}>
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
        </div>

        <h1
          onMouseOver={() => setTitle("Sobhan Esfandiary")}
          onMouseLeave={() => setTitle("S.E")}
        >
          {Title}
        </h1>

        <ul className={Show}>
          <Link to="/">
            <li
              style={{ animation: `${Anim} 1s backwards 0.3s` }}
              className="nav-li"
            >
              Home
            </li>
          </Link>
          <Link to="/about">
            <li
              style={{ animation: `${Anim} 1s backwards 0.3s` }}
              className="nav-li"
            >
              About
            </li>
          </Link>
          <Link to="/projects">
            <li
              style={{ animation: `${Anim} 1s backwards 0.3s` }}
              className="nav-li"
            >
              Project
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
