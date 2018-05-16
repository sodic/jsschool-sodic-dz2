import React, { PureComponent } from 'react';
import Pallete from './Pallete';
import Toolbar from './Toolbar';

class RGBPanel extends PureComponent {
  render() {
    return (
      <div>
        <Pallete
          height={this.props.pictureSize}
          width={this.props.pictureSize}
          pixelColors={this.props.pictureColors}
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
        <Toolbar
          handleClearClick={this.props.handleClearClick}
          brush={this.props.brush}
        />
      </div>
    );
  }
}

export default RGBPanel;
