import React, { Component } from 'react'
import Footer from './Footer'

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
        <Footer />
      </div>
    );
  }
}

export default App;
