import React, { useState } from "react";
import "../css/login.css";
import Homenavbar from "../navbar/home_navbar";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

function Adminlogin() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("please enter email and password");
    } else {
      Axios.get(
        "http://localhost:3001/adminlogin/" + password
      ).then(response => {
        console.log(response.data[0].username);
        try {
          localStorage.setItem("name", response.data[0].username);
          localStorage.setItem("email", response.data[0].email);
          localStorage.setItem("password", response.data[0].password);
          localStorage.setItem("address", response.data[0].address);
          localStorage.setItem("mobile", response.data[0].mobile);
          navigate("/adminhomepage");
        } catch (err) {
          alert("Please enter valid credentials");
        }
      });
    }
  };

  return (
    <div>
      <Homenavbar />
      <div class="limiter" style={{ marginTop: "2%" }}>
        <div
          class="container-login100"
          style={{ backgroundColor: "transparent", marginTop: "-2%" }}
        >
          <div class="wrap-login100">
            <form class="login100-form validate-form p-l-55 p-r-55 p-t-178">
              <span class="login100-form-title">Admin Login</span>

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
                  type="password"
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
                  Sign in
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

export default Adminlogin;