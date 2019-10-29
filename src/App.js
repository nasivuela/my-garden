import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    fetch(`/.netlify/functions/trefle`)
      .then(res => res.json())
      .then(data => {
        return fetch(
          `https://trefle.io/api/plants?token=${data.token}&q=rosemary`
        );
      })
      .then(res => res.json())
      .then(data => console.log(data));
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
