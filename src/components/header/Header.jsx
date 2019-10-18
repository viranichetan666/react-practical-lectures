import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <div className="bluecolor text-center an-20 pt15 light--text bold-text">
          React Concepts
        </div>
        <div className="header bluecolor pa20 flex-x flex-wrap">
          <NavLink to="/class-component" className="nav-url an-15 medium-text">
            Class Based Component
          </NavLink>
          <NavLink
            to="/functional-component"
            className="nav-url an-15 medium-text"
          >
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
          <NavLink to="/forms" className="nav-url an-15 medium-text">
            Forms
          </NavLink>
          <NavLink to="/basic-hooks" className="nav-url an-15 medium-text">
            Hooks
          </NavLink>
          <NavLink
            to="/conditional-rendering"
            className="nav-url an-15 medium-text"
          >
            Conditional Rendering and looping
          </NavLink>
          <NavLink to="/composition" className="nav-url an-15 medium-text">
            Composition
          </NavLink>
          <NavLink to="/advance-hook" className="nav-url an-15 medium-text">
            Advance In hooks
          </NavLink>
          <NavLink to="/style-component" className="nav-url an-15 medium-text">
            Styled Component
          </NavLink>
          <NavLink
            to="/higher-order-component"
            className="nav-url an-15 medium-text"
          >
            Higher-order-component
          </NavLink>
          <NavLink to="/redux" className="nav-url an-15 medium-text">
            Redux
          </NavLink>
          <NavLink to="/redux-saga" className="nav-url an-15 medium-text">
            Redux Saga
          </NavLink>
          <NavLink to="/mqtt-app" className="nav-url an-15 medium-text">
            MQTT APP
          </NavLink>
        </div>
      </Fragment>
    );
  }
}

export default Header;
