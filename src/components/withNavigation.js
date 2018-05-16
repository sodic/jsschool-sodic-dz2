import React, { PureComponent } from 'react';
import Navbar from './Navbar';

export default function withNavigation(WrappedComponent) {
  return class extends PureComponent {
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
