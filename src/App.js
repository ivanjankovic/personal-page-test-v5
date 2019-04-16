import React, { Component } from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <main>
          <p>Main</p>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
