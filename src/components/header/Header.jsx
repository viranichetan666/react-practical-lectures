import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div className ="header bluecolor pa20 flex-x flex-wrap">
                <NavLink to="/class-component" className="nav-url an-15 medium-text">
                    Class Based Component
                </NavLink>
                <NavLink to="/functional-component" className="nav-url an-15 medium-text">
                    Functional Component
                </NavLink>
                <NavLink to="/props-state" className="nav-url an-15 medium-text">
                    Props and State Demo
                </NavLink>
                <NavLink to="/event-handling" className="nav-url an-15 medium-text">
                    Event Handling
                </NavLink>
                <NavLink to="/fragment-demo" className="nav-url an-15 medium-text">
                    Fragment Demo
                </NavLink>
                <NavLink to="/conditional-rendering" className="nav-url an-15 medium-text">
                    Conditional Rendering and looping
                </NavLink>
            </div>
        );
    }
}

export default Header;