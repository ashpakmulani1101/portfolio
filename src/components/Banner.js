import React from "react";
import {
  FaCode,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Banner.css";


const Banner = () => {
  const [state, setState] = React.useState({
    text: "Welcome to my personal portfolio. This is all about my computer science journey and archievemnts and either services for you",
    image: "../images/12.jpg"
  });


  return (

    <div className="bannertext__container">
      <div id="banner__icon"><FaCode id="facode" /></div>
      <div className="left__block">
        <h1>Welcome to Portfolio</h1><h1> I'm Ashpak Mulani</h1>
        <span className="ChangingText"></span>
        <div className="quote__box">
          <p>{state.text}</p>
        </div>
      </div>
      <div className="right__block">
        <div className="admin">
          <img className="admin__img" src={"https://github.com/ashpakmulanii/portfolio/blob/main/src/images/admin.JPG?raw=true"} />
          <div className="admin__info">
            <p style={{ fontSize: "16px" }}>Ashpak Ahmad Mulani</p>
            <p id="admin__role">- Full Stack Web Developer</p>
          </div>
        </div>
        <div className="two__btn">
          <Link to="/publications" className="show__more">Achievemnts</Link>
          <Link to="/fitness" className="explore__btn">Fitness & Lifestyle</Link>
        </div>
      </div>
      {/* <img className="banner__bg" src={require("../images/banner(1).jpg")}></img> */}

    </div>



  );
};

export default Banner;