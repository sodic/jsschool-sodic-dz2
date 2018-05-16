import React, { Component } from 'react';
import Pixel from './Pixel';

class Pallete extends Component {
  render() {
    const cellHeight = this.props.height / this.props.rows;
    const cellWidth = this.props.width / this.props.cols;

    const style = {
      width: `${this.props.width}px`,
      height: `${this.props.height}px`
    };

    const cellNumber = this.props.rows * this.props.cols;

    return (
      <div className="pallete" style={style}>
        {[...Array(cellNumber)].map((e, i) => (
          <Pixel
            key={i}
            color={this.props.pixelColors[i]}
            index={i}
            height={cellHeight}
            width={cellWidth}
            handleClick={this.props.handleClick}
            colorFilter={this.props.colorFilter}
          />
        ))}
      </div>
    );
  }
}

export default Pallete;
