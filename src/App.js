import React, { Component } from 'react';

import svgEmail from './svg/email.svg';
import svgReddit from './svg/reddit.svg';
import svgDiscord from './svg/discord.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>header</p>
        </header>
        <main>
          <p>main</p>
        </main>
        <footer>
          <div>
            <img src={svgEmail} className="logo" alt="email icon" />
            <img src={svgReddit} className="logo" alt="reddit icon" />
            <img src={svgDiscord} className="logo" alt="discord icon" />
          </div>
          {/* <p>foter</p> */}
        </footer>
      </div>
    );
  }
}

export default App;
