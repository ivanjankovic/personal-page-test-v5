import React, { Component } from "react";

import { ReactComponent as LinkedInSvg } from "./svg/linkedin.svg";
import { ReactComponent as GitHubSvg } from "./svg/github.svg";
import { ReactComponent as MailToSvg } from "./svg/email.svg";

const urlLinkedIn = "https://www.linkedin.com/in/ivanjankovic3";
const urlGitHub = "https://github.com/ivanjankovic";
const urlMailTo = "mailto:jankoemail@gmail.com";

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="dividerLine" />
        <footer>
          <div>
            <LinkedInSvg
              className="svg-icon"
              onClick={() => window.open(urlLinkedIn)}
            />
            <GitHubSvg
              className="svg-icon"
              onClick={() => window.open(urlGitHub)}
            />
            <MailToSvg
              className="svg-icon"
              onClick={() => window.open(urlMailTo)}
            />
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
