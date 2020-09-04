import React from "react";
import "./skill.css";
import skills from "../../assets/svgs/skills.svg";
import Prog from "../progress/Prog";
import Btn from "../button/button";

const Skill = React.memo(() => {

    const skil = document.getElementsByClassName("skill").HTMLCollection
    console.log(skil);
    
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
      <Btn cls={`btt`} title="Know more" />
    </section>
  );
});

export default Skill;
