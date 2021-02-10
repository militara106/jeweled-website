import React from "react";
import logo from '../assets/Jlogo2.gif'
import Fade from 'react-reveal/Fade';

export default function Introduction({ title, subtitle, id }) {
  return (
    <div className="section introBG">
      <div className="introduction" id={id}>
      <img className="introLogo" src={logo} alt="Jeweled" />
      <Fade bottom>
        <h1 className="introTitle">{title}</h1>
      </Fade>
      <Fade bottom>
        <h4>{subtitle}</h4>
      </Fade>
      </div>
    </div>
  );
}
