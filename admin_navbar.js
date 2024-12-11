import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

function Adminnavbar() {
  return (
    <div>
      <nav class="navbar navbar-inverse" id="navbar">
        <div class="container-fluid">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span class="icon-bar" />
              <span class="icon-bar" />
              <span class="icon-bar" />
            </button>
            <a
              class="navbar-brand"
              style={{ color: "white", paddingTop: "23px" }}
            >
              LIBRARY MANAGEMENT APP
            </a>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav navbar-right" id="navbar-right">
              <li>
                <Link to="/adminhomepage    " style={{ color: "white" }}>
                  DASHBOARD
                </Link>
              </li>
              <li class="dropdown">
                <a
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  style={{ color: "white" }}
                >
                  VIEW<span class="caret" />
                </a>
                <ul
                  class="dropdown-menu"
                  style={{ backgroundColor: "#d43f3a" }}
                  id="dropdown-menu"
                >
                  <li>
                    <Link to="/bookrequests" style={{ color: "white" }}>
                      BOOK REQUEST
                    </Link>
                  </li>
                </ul>
              </li>

              <li class="dropdown">
                <a
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  style={{ color: "white" }}
                >
                  ADD<span class="caret" />
                </a>
                <ul
                  class="dropdown-menu"
                  style={{ backgroundColor: "#d43f3a" }}
                  id="dropdown-menu"
                >
                  <li>
                    <Link to="/addbooks" style={{ color: "white" }}>
                      ADD BOOKS
                    </Link>
                  </li>
                  <li>
                    <Link to="/addadmin" style={{ color: "white" }}>
                      ADD ADMIN
                    </Link>
                  </li>
                  <li>
                    <Link to="/addmessage" style={{ color: "white" }}>
                      ADD MESSAGE
                    </Link>
                  </li>
                </ul>
              </li>

              <li class="dropdown">
                <a
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  style={{ color: "white" }}
                >
                  DELETE<span class="caret" />
                </a>
                <ul
                  class="dropdown-menu"
                  style={{ backgroundColor: "#d43f3a" }}
                  id="dropdown-menu"
                >
                  <li>
                    <Link to="/deletebooks" style={{ color: "white" }}>
                      DELETE BOOKS
                    </Link>
                  </li>
                  <li>
                    <Link to="/deleteuser" style={{ color: "white" }}>
                      DELETE USERS
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/adminprofile" style={{ color: "white" }}>
                  PROFILE
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    localStorage.clear();
                  }}
                  style={{ color: "white" }}
                >
                  <span class="glyphicon glyphicon-log-in" />&nbsp; LOGOUT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Adminnavbar;
