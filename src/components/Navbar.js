import React from "react";
import Badge from "react-bootstrap/Badge";

import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav 
      className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/#">
          {props.title}
        </a>
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
              <a className="nav-link active" aria-current="page" href="/#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                {props.aboutText}
              </a>
            </li>
          </ul>
          <Badge onClick={props.blueTheme} className="badges m-2" bg="primary">Blue Theme</Badge>{" "}
          <Badge onClick={props.redTheme} className="badges m-1" bg="danger">Red Theme</Badge>{" "}
          <Badge onClick={props.greenTheme} className="badges m-2" bg="success">Green Theme</Badge>{" "}
          <Form
            className={`my-4 text-${props.mode === "light" ?props.mode : "dark"}`}
          >
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Enable dark mode"
              onClick={props.toggleMode}
            />
          </Form>
          <form className="d-flex" role="search">
            <input
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#240b0b",
              }}
              className="form-control me-2 mx-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string, aboutText: PropTypes.string };
