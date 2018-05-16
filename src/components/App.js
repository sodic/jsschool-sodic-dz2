import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import '../styles/App.css';
import RGBPanel from './RGBPanel';
import BWPanel from './BWPanel';
import withNavigation from './withNavigation';

class App extends PureComponent {


  renderWithProps = (Component, props) => () => (
    <Component {...props} />
  );
  render() {
    const props = {
      pictureColors: this.props.pictureColors,
      pictureSize: this.props.pictureSize,
      resolution: this.props.resolution
    };

    const NavigableRGBRender = this.renderWithProps(withNavigation(RGBPanel), {
      ...props,
      handlePixelClick: this.props.handlePixelClick,
      handlePalleteClick: this.props.handlePalleteClick,
      palleteColors: this.props.palleteColors,
      handleClearClick: this.props.handleClearClick,
      brush: this.props.brush
    });

    const NavigableBWRender = this.renderWithProps(withNavigation(BWPanel), props);

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
