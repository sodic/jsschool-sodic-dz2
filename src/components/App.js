import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import '../styles/App.css';
import RGBPanel from './RGBPanel';
import BWPanel from './BWPanel';
import withNavigation from './withNavigation';

class App extends Component {
  render() {
    const props = {
      pixelColors: this.props.pixelColors,
      pictureSize: this.props.pictureSize,
      resolution: this.props.resolution
    };

    const renderWithProps = (Component, additionalProps) => () => (
      <Component {...props} {...additionalProps} />
    );

    const NavigableRGBRender = renderWithProps(withNavigation(RGBPanel), {
      handlePixelClick: this.props.handlePixelClick,
      handlePalleteClick: this.props.handlePalleteClick,
      palleteColors: this.props.palleteColors
    });

    const NavigableBWRender = renderWithProps(withNavigation(BWPanel));

    return (
      <BrowserRouter>
        <Switch>
          <Route path="/rgb" render={NavigableRGBRender} />
          <Route path="/bw" render={NavigableBWRender} />
          <Redirect from="/" to="/rgb" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
