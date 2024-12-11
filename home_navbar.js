import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

function Homenavbar() {
  return (
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">
              LIBRARY MANAGEMENT SYSTEM
            </a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/">
                  <span className="glyphicon glyphicon-home" />&nbsp;&nbsp;Home
                </Link>
              </li>
              <li>
                <Link to="/signup">
                  <span className="glyphicon glyphicon-user" />&nbsp;&nbsp;Sign
                  Up
                </Link>
              </li>
              <li>
                <Link to="/userlogin">
                  <span className="glyphicon glyphicon-log-in" />&nbsp;&nbsp;Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Homenavbar;
