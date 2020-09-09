import React, {useEffect} from "react";
import "./skillPage.css";
import Tool from "../../components/tool/tool";
import html from "../../assets/images/html.png";
import boots from "../../assets/images/bootstrap.png";
import js from "../../assets/images/jss.png";
import jq from "../../assets/images/jquery.png";
import rec from "../../assets/images/react.png";

const SkillPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="skills-sec">
      <h1>About my skills</h1>
      <Tool
        title="HTML & CSS"
        img={html}
        desc=" learned about HTML and CSS for in tier one year and I learned basics and pro tips in this game and I made some animations and websites for my own! the best part of CSS is flexbox and grids that help you to give your website a good shape and design the elements what you want"
      />
      <Tool
        title="Frame works"
        img={boots}
        desc="I worked with Bootstrap and Materialize both to my projects but I mostly prefer to work with pure CSS and do my job but if it will be a big project why not use it and it will help me to increase my speed. I prefer to Materialize rather than Bootstrap 4.5 because you can make your components more personalized"
      />

      <Tool
        title="Java script"
        img={js}
        desc="Finally my best part !! At first, I avoid learning that but finally, I get javascript curses and start it from the beginning. I know some useful information from js and now I can do some projects with pure js"
      />

      <Tool
        title="JQuery"
        img={jq}
        desc="jquery is one of the most popular libraries of javascript and it makes writing js easier than it's possible I use it for regular projects because it gets old and just old frameworks to use it. I prefer to react js for my projects if I wanna crack it up"
      />

      <Tool
        title="React js"
        img={rec}
        desc="React js is the most powerful library of javascript because it behavior somebody calls it a framework. I learned it from online curses and its very useful if you have a big project and you want to be fast and heavy. I prefer to create components with React hooks and it makes my work easy like drinking water because I can use lifecycles very easier than I used it in class components"
      />
    </section>
  );
};

export default SkillPage;
