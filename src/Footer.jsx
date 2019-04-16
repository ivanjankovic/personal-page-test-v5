import React, { Component } from 'react';

import svgEmail from './svg/email.svg';
import svgReddit from './svg/reddit.svg';
import svgDiscord from './svg/discord.svg';

class Footer extends Component {
  render() {
    return (
      // <div className="App">
        <footer>
          <div>
            <img src={svgEmail} className="svg-icon" alt="email icon" />
            <img src={svgReddit} className="svg-icon" alt="reddit icon" />
            <img src={svgDiscord} className="svg-icon" alt="discord icon" />
          </div>
        </footer>
      // </div>
    );
  }
}

export default Footer;