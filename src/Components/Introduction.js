import React from "react";
import logo from '../assets/Jlogo2.gif'

export default function Introduction({ title, subtitle, dark, id }) {
  return (
    <div className="section">
      <div className="introduction" id={id}>
      <img className="introLogo" src={logo} alt="Jeweled" />
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    </div>
  );
}
