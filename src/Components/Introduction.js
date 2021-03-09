import React from "react";
import logo from '../assets/Jlogo2.gif'
import Fade from 'react-reveal/Fade';

export default function Introduction({ title, content, id }) {
  return (
    <div className="section introBG">
      <div class="lines">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>

      <div className="introduction" id={id}>

      {/* LOGO REMOVED, REPLACE WITH STATIC */}
      {/* <img className="introLogo" src={logo} alt="Jeweled" /> */}

      <Fade bottom>
        <h1 className="introTitle">{title}</h1>
      </Fade>
      <Fade bottom>
        <h4>{content}</h4>
      </Fade>
      </div>
    </div>
  );
}
