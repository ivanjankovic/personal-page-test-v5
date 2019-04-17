import React from 'react'

import svgLogo from "./svg/navlogo.svg";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <header>
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
            <a href="/signin" class="navlink">Sign In</a>
          </div>
        </header>
        <div className="dividerLine" />
      </div>
    )
  }
}

export default NavBar
