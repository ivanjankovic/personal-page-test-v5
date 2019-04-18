import React, { Component } from "react";

import { ReactComponent as EmailSvg } from "./svg/email.svg";
import { ReactComponent as RedditSvg } from "./svg/reddit.svg";
import { ReactComponent as DiscordSvg } from "./svg/discord.svg";

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="dividerLine" />
        <footer>
          <div>
            <EmailSvg className="svg-icon" />
            <RedditSvg className="svg-icon" />
            <DiscordSvg className="svg-icon" />
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
