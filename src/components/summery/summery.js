import React from "react";
import { Link } from "react-router-dom";
import "./summery.css";
import Btn from "../button/button";

const Summery = () => {
  return (
    <div className="summery">
      <div className="summery-about-me">
        <h2>About Me</h2>
        <p className="par">
          I am Sobhan Esfandiari, born on April 20, 2000, I am a student of
          industrial accounting and I am interested in the world of technology,
          especially website design and development. I started the web world
          with SEO and optimizing websites. I did SEO for almost a year until I
          realized that I could build a website much easier than I thought, and
          yes, of course I first felt that the website I had was working. It
          needs a series of facilities!
        </p>
        <Link to="/about">
          <Btn title="Read more" cls="btr" />
        </Link>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Summery;
