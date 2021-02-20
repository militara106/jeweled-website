import React from 'react';
import Section from '../Components/Section';
import dummyText from '../DummyText';

export default function Contact() {
  return (
    <Section
          title='Contact Us'
          subtitle={dummyText}
          className="secondaryBG"
          id='section4'
        />
  );
}
