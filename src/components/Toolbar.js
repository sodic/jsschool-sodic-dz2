import React, { Component } from 'react';

class Toolbar extends Component {
  render() {
    return (
      <div id="toolbar">
        <span id="sample" style={{ background: this.props.brush }}>
          &nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <span id="clear" onClick={this.props.handleClearClick}>
          Clear Board
        </span>
      </div>
    );
  }
}

export default Toolbar;
