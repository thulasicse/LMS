import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/navbar.css";

function Usernavbar() {
  const navigate = useNavigate();
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
                <Link to="/userhomepage">
                  <span className="glyphicon glyphicon-home" />&nbsp;&nbsp;Home
                </Link>
              </li>
              <li>
                <Link to="/mybooks">
                  <span className="glyphicon glyphicon-home" />&nbsp;&nbsp;Your
                  Books
                </Link>
              </li>
              <li>
                <Link to="/viewmessages">
                  <span className="glyphicon glyphicon-home" />&nbsp;&nbsp;Messages
                </Link>
              </li>
              <li>
                <Link to="/userprofile">
                  <span className="glyphicon glyphicon-user" />&nbsp;&nbsp;Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/userlogin"
                  onClick={() => {
                    localStorage.clear();
                    navigate("/");
                  }}
                >
                  <span className="glyphicon glyphicon-log-out" />&nbsp;&nbsp;Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Usernavbar;
