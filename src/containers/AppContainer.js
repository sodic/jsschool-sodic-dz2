import React, { PureComponent } from 'react';
import App from '../components/App';
import * as util from '../utilities.js';

class AppContainer extends PureComponent {
  constructor() {
    super();

    const resolution = 10;
    
    this.state = {
      brush: util.randomColor(),
      resolution: resolution,
      pictureSize: this.adjustSize(this.findOptimalSize(), resolution),
      pixelColors: [...Array(resolution * resolution)].map(util.randomColor),
      palleteColors: [...Array(resolution)].map(util.randomColor),
    };
  }

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

  findOptimalSize = () => Math.min(window.innerHeight, window.innerWidth);

  adjustSize = (size, resolution) =>
    Math.round(0.6 * size / resolution) * resolution;

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

  clearBoard = () => {
    this.setState({
      pixelColors: [...Array(this.state.pixelColors.length)].map(
        () => this.state.brush
      )
    });
  };

  render() {
    return (
      <App
        pictureColors={this.state.pixelColors}
        palleteColors={this.state.palleteColors}
        pictureSize={this.state.pictureSize}
        resolution={this.state.resolution}
        handlePixelClick={this.paintPixel}
        handlePalleteClick={this.chooseColor}
        handleClearClick={this.clearBoard}
        brush={this.state.brush}
      />
    );
  }
}

export default AppContainer;
