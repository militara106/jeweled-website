import React from 'react';
import Section from '../Components/Section';
import dummyText from '../DummyText';

export default function Contact() {
  return (
    <Section
          title='Section 4'
          subtitle={dummyText}
          className="secondaryBG"
          id='section4'
        />
  );
}
