import React from 'react'

import mainPicture from "./main-picture.jpg";

class Main extends React.Component {
  render() {
    return (
      <div>
        <main>
          <img src={mainPicture} className="main-pic" alt="lions head" />
        </main>
      </div>
    );
  }
}

export default Main;
