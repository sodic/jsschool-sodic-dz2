import React, { Component } from "react";
import ColorSquare from "./ColorSquare";

class Pallete extends Component {
  render() {
    const cellHeight = this.props.height / this.props.rows;
    const cellWidth = this.props.width / this.props.cols;

    const style = {
      width: `${this.props.width}px`,
      height: `${this.props.height}px`
    };
    const cellNumber = this.props.rows * this.props.cols;
    return <div className="pallete" style={style}>
        {[...Array(cellNumber)].map((e, i) => (
          <ColorSquare
            key={"pic" + i}
            color={this.props.pixelColors[i]}
            index={i}
            handleClick={this.props.handleClick}
            height={cellHeight}
            width={cellWidth}
            colorFilter={this.props.colorFilter}
          />
        ))}
      </div>;
  }
}

export default Pallete;
