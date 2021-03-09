import React, { Component } from 'react';
import Introduction from '../Components/Introduction';

class Intro extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Introduction
          title="Jeweled"
          id='section1'
          content={<div className="introSub"> Transitioning into a more meaningful relationship
          </div>}
        />
      </div>
    );
  }
}

export default Intro;
