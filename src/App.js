import React, { Component } from 'react';
import joggling from './joggling.gif';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={joggling} alt="logo" />
          <p>
            HELLO
          </p>
        </header>
      </div>
    );
  }
}

export default App;
