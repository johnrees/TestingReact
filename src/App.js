import React, { Component } from 'react';
// import logo from './logo.svg';
import Canvas from './components/Canvas.js';
import Rect from './components/Rect.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Rect x={20} y={40} width={200} height={100} />
        <Rect x={20} y={40} width={150} height={100} />
        <Canvas width={400} height={200} id='canvas1' ></Canvas>
      </div>
    );
  }
}

export default App;

// <div className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <h2>Blargh blargh blargh</h2>
// </div>