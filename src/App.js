import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Introduction from "./Components/Introduction";
import dummyText from "./DummyText";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Introduction
          title="Intro"
          subtitle="wadwadwadwdwadwawdwadawdwadawdwdawd"
          dark={true}
          id="section1"
        />
        <Navbar />
        <Section
          title="Section 2"
          subtitle={dummyText}
          dark={false}
          id="section2"
        />
        <Section
          title="Section 3"
          subtitle={dummyText}
          dark={true}
          id="section3"
        />
        <Section
          title="Section 4"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
      </div>
    );
  }
}

export default App;
