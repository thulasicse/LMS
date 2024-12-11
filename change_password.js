import Axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/login.css";
import Homenavbar from "../navbar/home_navbar";
import { useNavigate } from "react-router-dom";
import Usernavbar from "../navbar/user_navbar";

function Changepassword() {
  const navigate = useNavigate();
  const [email, setemail] = useState(localStorage.getItem("email"));
  const [password, setpassword] = useState(localStorage.getItem("password"));
  const handleSubmit = e => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("please enter email and password");
    } else {
      Axios.put("http://localhost:3001/changepassword", {
        email: email,
        password: password,
        id: localStorage.getItem("id")
      }).then(response => {
        if (response.data == "password updated successfully") {
          alert("password updated successfully");
        }
      });
    }
  };
  return (
    <div>
      <Usernavbar />
      <div class="limiter" style={{ marginTop: "2%" }}>
        <div
          class="container-login100"
          style={{ backgroundColor: "transparent", marginTop: "-2%" }}
        >
          <div class="wrap-login100">
            <form class="login100-form validate-form p-l-55 p-r-55 p-t-178">
              <span class="login100-form-title">Change Password</span>

              <div
                class="wrap-input100 validate-input m-b-16"
                data-validate="Please enter username"
              >
                <input
                  class="input100"
                  type="email"
                  name="username"
                  value={email}
                  onChange={e => setemail(e.target.value)}
                  placeholder="Email"
                />
                <span class="focus-input100" />
              </div>

              <div
                class="wrap-input100 validate-input"
                data-validate="Please enter password"
              >
                <input
                  class="input100"
                  type="text"
                  value={password}
                  onChange={e => setpassword(e.target.value)}
                  name="pass"
                  placeholder="Password"
                />
                <span class="focus-input100" />
              </div>
              <br />
              <div class="container-login100-form-btn">
                <button class="login100-form-btn" onClick={handleSubmit}>
                  Update Password
                </button>
              </div>

              <div class="flex-col-c p-t-40 p-b-40" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Changepassword;
