import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  
  return (
    <div>
      <nav className={`navbar navbar-${props.mode} navbar-expand-lg bg-${props.mode}`}>
        <div className="container-fluid">
          <NavLink className="navbar-brand " to="/">
            {props.title}
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  {props.about}
                </NavLink>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggleMode}/>
              <label className={`form-check-label text-${props.mode==="light"?"dark":"light"}`} htmlFor="flexSwitchCheckChecked">
                Enable {props.mode==="light"?"dark":"light"} mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.prototype = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
};
Navbar.defaultProps = {
  title: "Set title",
  link: "set link",
};
