import React, { Component } from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import Main from './Main'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
