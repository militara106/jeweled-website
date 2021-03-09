import React from "react";
import TextLoop from 'react-text-loop'

const staticWord = "Be "

export default function textLoop(props) {
  return (
    <h1 className="textLoop">
        <span className="textLoopStatic">{staticWord}</span>
        <TextLoop>
            <span> Loved</span>
            <span> Safe</span>
            <span> Yourself</span>
        </TextLoop>
    </h1>
  );
}
