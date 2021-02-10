import React from 'react';
import Section from '../Components/Section';
import dummyText from '../DummyText';

export default function About() {
  return (
    <Section
          title='Section 2'
          subtitle={dummyText}
          dark={false}
          id='section2'
        />
  );
}