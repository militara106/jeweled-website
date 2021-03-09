import React from 'react';
import Section from '../Components/Section';
import dummyText from '../DummyText';

export default function Contact() {
  return (
    <Section
          title='Contact Us'
          className="secondaryBG"
          id='section4'
          content={dummyText}
        />
  );
}
