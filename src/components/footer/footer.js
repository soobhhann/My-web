import React from "react";
import "./footer.css";
import insta from "../../assets/svgs/icons8-instagram.svg";
import tele from "../../assets/svgs/icons8-telegram-app.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <h2>Sobhan Esfandiary</h2>
        <p>call me if You need a WebDesigner</p>

        <br />

        <div className="social">
          <img src={insta} alt="instagram" />
          <a href="#">
            <p>instagram</p>
          </a>
        </div>

        <div className="social">
          <img src={tele} alt="instagram" />
          <a href="#">
            <p>telegram</p>
          </a>
        </div>

        <div className="gmail">
          <p>soobhhann@gmail.com</p>
        </div>
      </div>

      <p className="copyright">Soobhhan production 2020</p>
    </footer>
  );
};
export default Footer;
