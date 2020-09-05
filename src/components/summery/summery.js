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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
          temporibus fugiat. Delectus est quae beatae corporis sint,
          voluptatibus voluptate quia ex. Eos reprehenderit explicabo repellat
          ad laboriosam, dolores repellendus dolor itaque iste recusandae
          doloribus debitis nisi. Officiis doloribus nisi corrupti cupiditate
          ipsa, excepturi aspernatur. Autem esse aliquam odio incidunt facilis
          voluptatem non fugit ipsam pariatur, quidem quasi expedita cupiditate,
          nemo ratione necessitatibus molestias. Nihil debitis exercitationem
          repellendus quis vitae aliquam molestiae nisi sed. Ducimus, quibusdam
          exercitationem iure pariatur at mollitia quo, sunt laudantium facilis
          ratione, molestiae hic sed id nam ipsum dolores omnis numquam quidem
          ullam cum quis. Porro, autem! Mollitia maiores delectus perspiciatis
          vel accusantium deserunt facere pariatur modi natus dolores rem
          veritatis sapiente, excepturi quos qui? Quae qui doloribus dolor nihil
          magni, beatae exercitationem obcaecati facilis fugiat, temporibus,
          culpa vitae amet a? Eveniet repellat id sapiente consectetur
          recusandae aliquid iure nisi tenetur, voluptate sunt magnam, quos
          asperiores amet.
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
