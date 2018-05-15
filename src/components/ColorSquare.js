import React, { Component } from "react";

class ColorSquare extends Component {
  constructor(props) {
    super();
    this.colorFilter = props.colorFilter || (color => color);
    this.index = props.index;
    this.style = {
      width: `${props.height}px`,
      height: `${props.width}px`,
      float: "left",
      cursor: "pointer"
    };
  }

  onClick = () => {
    this.props.handleClick(this.index);
  };

  render() {
    return (
      <div
        onClick={this.onClick}
        style={{
          ...this.style,
          background: this.colorFilter(this.props.color)
        }}
      />
    );
  }
}

export default ColorSquare;
