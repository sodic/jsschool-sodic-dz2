import React, { Component } from 'react';
import Navbar from './Navbar';

export default function withNavigation(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <div>
          <Navbar />
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
}
