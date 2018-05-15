import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../App.css";
import RGBPallete from "./RGBPallete";
import BWPallete from "./BWPallete";
import NotFound from "./NotFound";
import withNavigation from "./withNavigation";

class App extends Component {
  
  render() {
    const withProps = (WrappedComponent, props) => <WrappedComponent {...props} />;
    const props = {
      pixelColors: this.props.pixelColors,
      palleteColors: this.props.palleteColors,
      pictureSize: this.props.pictureSize,
      resolution: this.props.resolution,
      handlePixelClick: this.props.handlePixelClick,
      handlePalleteClick: this.props.handlePalleteClick
    };
    const NavigableRGB = withNavigation(RGBPallete);
    const NavigableBW = withNavigation(BWPallete);
    return <BrowserRouter>
        <Switch>
          <Route path="/rgb" render={() => <NavigableRGB {...props} />} />
          <Route path="/bw" render={() => <NavigableBW {...props} />} />
          <Route path="/" render={() => <NavigableRGB {...props} />} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>;
  }
}

export default App;
