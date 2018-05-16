import React, { Component } from 'react';

class Pixel extends Component {
  constructor(props) {
    super();
    // console.log('?');
    this.colorFilter = props.colorFilter || (color => color);
    this.onClick = props.handleClick
      ? () => props.handleClick(this.index)
      : () => {};
    this.index = props.index;
  }

  render() {
    const style = {
      width: `${this.props.height}px`,
      height: `${this.props.width}px`,
      background: this.colorFilter(this.props.color)
    };

    return <div onClick={this.onClick} className="pixel" style={style} />;
  }
}

export default Pixel;
