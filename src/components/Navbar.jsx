import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  let textModeColor = props.mode === "dark" ? "white" : "black";
  let textModeName = props.mode === "dark" ? "Disable" : "Enable";
  let navdarkbg = props.mode === "dark" ? "gray" : "rgb(249, 249, 249)";

  let navStyleChange = {
    color: textModeColor,
    backgroundColor: navdarkbg,
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg" style={navStyleChange}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={navStyleChange}>
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  style={navStyleChange}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={navStyleChange}>
                  {props.aboutText}
                </Link>
              </li>
            </ul>

            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                aria-checked="true"
                id="flexSwitchCheckChecked"
                onClick={props.toggleMode}
              />
              <label
                className={`form-check-label text-${textModeColor}`}
                htmlFor="flexSwitchCheckChecked"
              >
                {textModeName} DarkMode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Company Name",
  aboutText: "About Company",
};
