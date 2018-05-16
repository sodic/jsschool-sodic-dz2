import React, { PureComponent } from 'react';
import Pixel from './Pixel';

class Board extends PureComponent {
  render() {
    const cellHeight = this.props.height / this.props.rows;
    const cellWidth = this.props.width / this.props.cols;

    const style = {
      width: `${this.props.width}px`,
      height: `${this.props.height}px`
    };

    return (
      <div className="board" style={style}>
        {this.props.pixelColors.map((color, i) => (
          <Pixel
            key={i}
            color={color}
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

export default Board;
