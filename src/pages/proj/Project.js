import React, { useEffect } from "react";
import "./proj.css";
import Example from "../../components/example/example";
import kish from "../../assets/images/kish.jpg";
import teeshe from "../../assets/images/teeshe.jpg";
import recipe from "../../assets/images/recipe.jpg";
import voice from "../../assets/images/voiceType.jpg";

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <section className="proj-sec container">
      <h1>My Projects</h1>

      {/* my greate examples */}
      <div className="greate">
        <Example
          img={kish}
          title="Kish gardi"
          desc="This is my favorite web designed by myself self and I used materialize for Ui and my friend using PHP and Codeigniter for this beautiful website. This site sell offers tickets on Kish island."
          link="https://kish-gardi.ir"
        />

        <Example
          img={teeshe}
          title="Teeshe"
          desc="This is the first project I never did an official project before this and I totally was destroyed it. I used bootstrap for UI. this website about buildings production and stone stuff  "
          link="https://teeshe.ir"
        />
      </div>

      {/* little projects */}
        <h1>My little ones</h1>
      <div className="little">
        <Example
          img={recipe}
          title="Food recipe finder"
          desc="This is an App to find your favorite food recipe and it helps and recommends you to find and make your favorite food"
          notice="Notice: If you have a problem whit this app you should turn on your VPN (it could be an API problem)"
          link="https://recipe-pi.vercel.app/"
        />
        <Example
          img={voice}
          title="Type tour voice"
          desc="You can talk in Persian and your device write whar you want !! The cool thing whit this app is that you can say app orders and it will run you just should say it"
          link="https://talk-app.vercel.app/"
        />
      </div>
    </section>
  );
}

export default Projects;
