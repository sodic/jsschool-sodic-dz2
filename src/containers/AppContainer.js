import React, { Component } from "react";
import App from "../components/App";

class AppContainer extends Component {
  DEFAULT_RESOLUTION = 10;
  DEFAULT_PICTURE_SIZE = 600;
  colors = [
    "red",
    "darkred",
    "green",
    "darkgreen",
    "lightgreen",
    "yellow",
    "blue",
    "brown",
    "pink",
    "orange"
  ];

  constructor() {
    super();

    function chooseRandomColor() {
      let color = "rgb(";
      for (let i = 0; i <= 2; i++) {
        color += Math.floor(Math.random() * 256);
        color += i === 2 ? ")" : ", ";
      }
      return color;
    }

    const pixelColors = [];
    const cellNumber = this.DEFAULT_RESOLUTION * this.DEFAULT_RESOLUTION;
    for (let index = 0; index < cellNumber; index++) {
        pixelColors[index] = chooseRandomColor();
    }

    const palleteColors = [];
    for (let index = 0; index < this.DEFAULT_RESOLUTION; index++) {
        palleteColors[index] = chooseRandomColor();
    }

    this.state = {
      brush: "yellow",
      resolution: this.DEFAULT_RESOLUTION,
      pictureSize: this.DEFAULT_PICTURE_SIZE,
      pixelColors: [...pixelColors],
      palleteColors: [...palleteColors]
    };
  }

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

  render() {
    return (
      <App
        pixelColors={this.state.pixelColors}
        handlePixelClick={this.paintPixel}
        palleteColors={this.state.palleteColors}
        handlePalleteClick={this.chooseColor}
        pictureSize={this.DEFAULT_PICTURE_SIZE}
        resolution={this.DEFAULT_RESOLUTION}
      />
    );
  }
}

export default AppContainer;
