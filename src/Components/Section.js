import React from "react";
import Fade from 'react-reveal/Fade';

export default function Section({ title, subtitle, id, className }) {
  return (
    <div className={className}>
      <Fade bottom>
        <div className="section-content" id={id}>
          <h1 className="sectionTitle">{title}</h1>
          <div>{subtitle}</div>
        </div>
      </Fade>
     </div>
  );
}
