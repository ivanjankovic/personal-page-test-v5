import React from "react";

import Card from "./Card";

import frogerImg from "./frogger.png"

const cardsData = {
  card1: {
    href: "https://ivanjankovic.github.io/gwg-udacity-fend-p7-neighborhood-map/",
    h3: "Made with 2Dimensions",
    imgDivClass: `source-client-source-2d-Components-HomeStyles-MadeWith2dImage-Ctyem`,
    imgClass: `source-client-source-2d-Components-HomeStyles-KovaHero-2iZRR`,
    imgSource: "https://cdn.2dimensions.com/features/kova_hero.png",
    imgAlt: "",
    description: "Discover real world projects created with our tools. Tag your posts with #MadeWith2D to get featured!"
  },
  card2: {
    href: "https://ivanjankovic.github.io/gwg-udacity-fend-p6-my-reads/",
    h3: "Flutter Support",
    divClass: `source-client-source-2d-Components-HomeStyles-FlutterImage-hG72S`,
    description: `Add dynamic real-time animations to Google's mobile app SDK for crafting high-quality native apps.`
  },
  froggerClone: {
    href: "https://ivanjankovic.github.io/gwg-udacity-fend-p3-arcade-game/",
    h3: 'Frogger Clone',
    imgClass: `source-client-source-2d-Components-HomeStyles-NimaLaptopImg-2ewcg`,
    imgSource: frogerImg,
    imgAlt: "",
    description: `Object-Oriented JavaScript, HTML5 Canvas, Collision Detection and ES6 Modals implementation`
  },
};
const Cards = [];

// create cards
Object.values(cardsData).forEach(card => {
  Cards.push(
    <Card
      href={card.href}
      h3={card.h3}
      imgDivClass={card.imgDivClass}
      divClass={card.divClass}
      imgClass={card.imgClass}
      imgSource={card.imgSource}
      imgAlt={card.imgAlt}
      description={card.description}
    />
  );
});

class Main extends React.Component {
  render() {
    return (
      <div>
        <main>
          <div class="source-client-source-2d-Components-HomeStyles-FeatureGrid-2-U17">
            {Cards}
          </div>
        </main>
      </div>
    );
  }
}

export default Main;
