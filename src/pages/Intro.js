import React, { Component } from 'react';
import Introduction from '../Components/Introduction';
import ReactRevealText from "react-reveal-text";

class Intro extends Component {
  constructor() {
    super();
    this.state = { show: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 800);
  }

  render() {
    return (
      <div>
        <Introduction
          title={<ReactRevealText show={this.state.show} className="introTitle">Jeweled</ReactRevealText>}
          subtitle={<div className="introSub"> Transitioning into a more meaningful relationship</div>}
          dark={true}
          id='section1'
        />
      </div>
    );
  }
}

export default Intro;
