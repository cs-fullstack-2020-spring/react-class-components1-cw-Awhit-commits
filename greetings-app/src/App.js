import React from 'react';
import logo from './logo.svg';
import './App.css';
import SayHello from './SayHello';
import SayHowdy from './SayHowdy';

function App() {
  let = bankAcc = {
    name: "Andrew",
    balance:4000,
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <SayHello></SayHello>
        <SayHowdy></SayHowdy>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
