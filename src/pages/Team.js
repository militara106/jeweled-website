import React from 'react';
import Section from '../Components/Section';
import Founders from '../assets/founders.png'
import TextLoop from '../Components/TextLoop';
import ReactPlayer from 'react-player';

export default function Team() {
  return (
    <Section
          title='Who Are We?'
          className="primaryBG"
          id='section3'
          content={
          <div className="team-container">
            {/* <img src={Founders} className="foundersPic" alt="Founders"/> */}
            <div className="player-wrapper">
            <ReactPlayer className="react-player"
               url="https://www.youtube.com/watch?v=XzOqdhFl7Ig"
               width="100%"
               height="100%"
               />
            </div>
          <TextLoop/>
          </div>}
        />
  );
}
