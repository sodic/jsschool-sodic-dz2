import React, { PureComponent } from 'react';
import Pallete from './Pallete';
import Color from 'color';

class BWPanel extends PureComponent {

  colorFilter = color => Color(color).grayscale()

  render() {
    return (
      <Pallete
        height={this.props.pictureSize}
        width={this.props.pictureSize}
        pixelColors={this.props.pictureColors}
        rows={this.props.resolution}
        cols={this.props.resolution}
        colorFilter={this.colorFilter}
      />
    );
  }
}

export default BWPanel;
