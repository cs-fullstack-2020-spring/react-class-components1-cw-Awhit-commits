import React from 'react';
import logo from './logo.svg';
import './App.css';
import BankAccount from './BankAccount';

function App() {
  let bankAcc = {
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
        <BankAccount myAccount = {bankAcc}></BankAccount>
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
