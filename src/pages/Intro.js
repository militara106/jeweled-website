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
          subtitle={<div className="introSub"> Transitioning into a more meaningful relationship</div>}
          id='section1'
        />
      </div>
    );
  }
}

export default Intro;
