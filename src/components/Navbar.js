import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav>
                <NavLink to="/rgb">RGB</NavLink>
                <NavLink to="/bw">BW</NavLink>
            </nav>
        );
    }
}

export default Navbar;