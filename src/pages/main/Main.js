import React from "react";
import "./main.css";
import Intro from "../../components/intro/intro";
import Me from "../../components/me/Me";
import Skill from "../../components/skill/skill";
import Summery from "../../components/summery/summery";

const Main = () => {
  return (
    <>
      <section className="main-sec container">
        <Intro />
        <Me />
        <Skill />
        <Summery />
      </section>
    </>
  );
};

export default Main;
