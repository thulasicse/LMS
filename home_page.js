import React from "react";
import { useNavigate } from "react-router-dom";
import Homenavbar from "../navbar/home_navbar";

function Homepage() {
  const navigate = useNavigate();
  return (
    <div>
      <Homenavbar />
      <div className="project__title">
        <p
          style={{
            fontFamily: "cursive",
            fontSize: "40px",
            lineHeight: "1.7",
            color: "white",
            margin: "0px"
          }}
        >
          LIBRARY MANAGEMENT SYSTEM
        </p>
        <button
          onClick={() => navigate("/userlogin")}
          type="button"
          class="btn btn-warning"
        >
          Request Now
        </button>
      </div>
    </div>
  );
}

export default Homepage;
