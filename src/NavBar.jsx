import React from 'react'

import svgLogo from "./svg/navlogo.svg";
import svgNavIcon from "./svg/navicon.svg";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <header>
          <img 
            src={svgNavIcon} className="source-client-source-2d-Components-NavStyles-NavMenuIcon-1G5H0" alt="navicon" />
          <div className="nav-logowrapper">
            <a href="/">
              <img src={svgLogo} className="navlogo" alt="logo" />
            </a>
          </div>
          <div className="page-links">
            <a href="/explore" className="navlink">Explore</a>
            <a href="/artists" className="navlink">Artists</a>
            <a href="/made-with-2d" className="navlink">Made with 2D</a>
          </div>
          <div class="account-links">
            <a href="/signin" class="navlink signinlink">Sign In</a>
          </div>
        </header>
        <div className="dividerLine" />
      </div>
    )
  }
}

export default NavBar
