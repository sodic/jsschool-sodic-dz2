import React, { Component } from 'react';
import App from '../components/App';
import * as util from '../utilities.js';

class AppContainer extends Component {
  constructor() {
    super();

    const resolution = 10;
    const pictureSize = this.adjustSize(this.findOptimalSize(), resolution);

    const pixelColors = [];
    const cellNumber = resolution * resolution;
    for (let index = 0; index < cellNumber; index++) {
      pixelColors[index] = util.randomColor();
    }

    const palleteColors = [];
    for (let index = 0; index < resolution; index++) {
      palleteColors[index] = util.randomColor();
    }

    this.state = {
      brush: util.randomColor(),
      resolution: resolution,
      pictureSize: pictureSize,
      pixelColors: [...pixelColors],
      palleteColors: [...palleteColors]
    };
  }

  findOptimalSize = () => Math.min(window.innerHeight, window.innerWidth);

  adjustSize = (size, resolution) =>
    Math.round(0.65 * size / resolution) * resolution;

  paintPixel = index => {
    this.setState({
      pixelColors: this.state.pixelColors.map(
        (color, idx) => (idx === index ? this.state.brush : color)
      )
    });
  };

  chooseColor = index => {
    this.setState({
      brush: this.state.palleteColors[index]
    });
  };

  componentDidMount() {
    window.onresize = () => {
      this.setState({
        pictureSize: this.adjustSize(
          this.findOptimalSize(),
          this.state.resolution
        )
      });
    };
  }

  render() {
    return (
      <App
        pixelColors={this.state.pixelColors}
        handlePixelClick={this.paintPixel}
        palleteColors={this.state.palleteColors}
        handlePalleteClick={this.chooseColor}
        pictureSize={this.state.pictureSize}
        resolution={this.state.resolution}
      />
    );
  }
}

export default AppContainer;
