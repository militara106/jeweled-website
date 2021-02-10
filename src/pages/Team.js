import React from 'react';
import Section from '../Components/Section';
import dummyText from '../DummyText';

export default function Team() {
  return (
    <Section
          title='Section 3'
          subtitle={dummyText}
          dark={false}
          id='section3'
        />
  );
}
