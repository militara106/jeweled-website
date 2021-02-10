import React from 'react';
import Introduction from '../Components/Introduction';
import ReactRevealText from "react-reveal-text";

export default function Intro() {

  var titleText = <ReactRevealText>Jeweled</ReactRevealText>

  return (
    <Introduction
          title={titleText}
          subtitle='wadwadwadwdwadwawdwadawdwadawdwdawd'
          dark={true}
          id='section1'
        />
  );
}
