import React from "react";

import Card from "./Card";

const cardsData = {
  card1: {
    href: "/made-with-2d",
    h3: "Made with 2Dimensions",
    imgDivClass: `source-client-source-2d-Components-HomeStyles-MadeWith2dImage-Ctyem`,
    imgClass: `source-client-source-2d-Components-HomeStyles-KovaHero-2iZRR`,
    imgSource: "https://cdn.2dimensions.com/features/kova_hero.png",
    imgAlt: "",
    description: "Discover real world projects created with our tools. Tag your posts with #MadeWith2D to get featured!"
  },
  card2: {
    href: "https://medium.com/2dimensions/flutter-support-e808cd947e9c",
    h3: "Flutter Support",
    divClass: `source-client-source-2d-Components-HomeStyles-FlutterImage-hG72S`,
    description: `Add dynamic real-time animations to Google's mobile app SDK for crafting high-quality native apps.`
  },
  card3: {
    href: "/about-nima",
    h3: "Nima",
    imgClass: `source-client-source-2d-Components-HomeStyles-NimaLaptopImg-2ewcg`,
    imgSource: "https://www.2dimensions.com/static/2224/images/nima_macbook.png",
    imgAlt: "",
    description: `Our original raster animation tool (no vector) for Unity and other game engines.`
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