import React from "react";

export default function Introduction({ title, subtitle, dark, id }) {
  return (
    <div className="section">
      <div className="introduction" id={id}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    </div>
  );
}
