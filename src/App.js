import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Intro from './pages/Intro';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';
import BottomBar from './Components/BottomBar';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro/>
        <Navbar />
        <About />
        <Team />
        <Contact />
        <BottomBar />
      </div>
    );
  }
}

export default App;
