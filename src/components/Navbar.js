import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <NavLink to="/rgb" activeClassName="selected">
          Colorful
        </NavLink>
        <NavLink to="/bw" activeClassName="selected">
          Black &amp; White
        </NavLink>
      </nav>
    );
  }
}

export default Navbar;
