import React, { Component } from "react";
import Pallete from "./Pallete";
import Color from "color";

class BWPanel extends Component {
  render() {
    return (
      <Pallete
        height={this.props.pictureSize}
        width={this.props.pictureSize}
        pixelColors={this.props.pixelColors}
        rows={this.props.resolution}
        cols={this.props.resolution}
        handleClick={() => {}}
        colorFilter={c => Color(c).grayscale()}
      />
    );
  }
}

export default BWPanel;
