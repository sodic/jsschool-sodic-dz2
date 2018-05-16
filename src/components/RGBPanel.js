import React, { Component } from "react";
import Pallete from "./Pallete";

class RGBPanel extends Component {
  render() {
    return (
      <div>
        <Pallete
          height={this.props.pictureSize}
          width={this.props.pictureSize}
          pixelColors={this.props.pixelColors}
          rows={this.props.resolution}
          cols={this.props.resolution}
          handleClick={this.props.handlePixelClick}
        />
        <Pallete
          height={this.props.pictureSize / this.props.resolution}
          width={this.props.pictureSize}
          cols={this.props.resolution}
          rows={1}
          pixelColors={this.props.palleteColors}
          handleClick={this.props.handlePalleteClick}
        />
      </div>
    );
  }
}

export default RGBPanel;
