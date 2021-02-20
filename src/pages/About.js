import React from 'react';
import Section from '../Components/Section';
import dummyText from '../DummyText';

export default function About() {
  return (
    <Section
          title='About'
          subtitle={dummyText}
          className="secondaryBG"
          id='section2'
        />
  );
}
