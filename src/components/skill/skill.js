import React from "react";
import { Link } from "react-router-dom";
import "./skill.css";
import skills from "../../assets/svgs/skills.svg";
import Prog from "../progress/Prog";
import Btn from "../button/button";

const Skill = () => {
  return (
    <section className="skill container">
      <h2>My Skills</h2>
      <div className="skill-container ">
        <img src={skills} alt="Skills" />
        <div className="prog-container">
          <Prog done="98%" title="HTML" />
          <Prog done="95%" title="CSS" />
          <Prog done="85%" title="JS" />
          <Prog done="80%" title="REACT" />
        </div>
      </div>
      <div className="btnn">
      <Link to="/skills">
        <Btn title="Know more" cls="btr" />
      </Link>
      </div>
    </section>
  );
};

export default Skill;
