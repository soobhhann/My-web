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
          needs a series of facilities! So I started researching and learning
          about the web, and after a month I was able to design my first
          template that I had written with blank HTML and CSS. After a few
          months, I started learning the beautiful language of JavaScript.After
          a few courses and also doing a few mini-projects, I went to the React
          js library, which was also full of wonders and cool things.Now I try
          to get ahead of everyone by improving my work and create new things
          that no one has done before
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
