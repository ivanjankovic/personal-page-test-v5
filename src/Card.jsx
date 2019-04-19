import React from 'react'

class Card extends React.Component {
  render() {
    return (
      <a href={this.props.href} class="source-client-source-2d-Components-HomeStyles-FeatureBlock3-2eeDh">
        <div class={`source-client-source-2d-Components-HomeStyles-NewsImage-1xaRn ${this.props.imgDivClass}`}>
          <img class={this.props.imgClass} src={this.props.imgSource} alt={this.props.imgAlt}/>
          <div class={this.props.divClass}></div>,
        </div>
        <div class="source-client-source-2d-Components-HomeStyles-NewsContent-3eFrk">
          <h3>{this.props.h3}</h3>
          <div class="source-client-source-2d-Components-HomeStyles-NewsDesc-2up89">{this.props.description}</div>
          <div class="source-client-source-2d-Components-HomeStyles-LearnMore-3RY2c">Learn More</div>
        </div>
      </a>
    )
  }
}

export default Card

