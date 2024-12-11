import React, { useState } from "react";
import "../css/signup.css";

import { useNavigate } from "react-router-dom";
import Adminnavbar from "../navbar/admin_navbar";
import Usernavbar from "../navbar/user_navbar";

function Userprofile() {
  const navigate = useNavigate();
  const [name, setname] = useState(localStorage.getItem("name"));
  const [email, setemail] = useState(localStorage.getItem("email"));
  const [password, setpassword] = useState(localStorage.getItem("password"));
  const [rollno, setrollno] = useState(localStorage.getItem("rollnumber"));
  const [mobile, setmobile] = useState(localStorage.getItem("mobile"));

  return (
    <div>
      <Usernavbar />
      <div class="limiter" style={{ marginTop: "2%" }}>
        <div
          class="container-login100"
          style={{ backgroundColor: "transparent", marginTop: "-2%" }}
        >
          <div class="wrap-login100" style={{ height: "660px" }}>
            <form class="login100-form validate-form p-l-55 p-r-55 p-t-178">
              <span class="login100-form-title">My Profile </span>

              <div
                class="wrap-input100 validate-input m-b-16"
                data-validate="Please enter username"
              >
                <input
                  class="input100"
                  type="text"
                  name="username"
                  value={name}
                  onChange={e => setname(e.target.value)}
                  placeholder="Username"
                />
                <span class="focus-input100" />
              </div>

              <div
                class="wrap-input100 validate-input m-b-16"
                data-validate="Please enter username"
              >
                <input
                  class="input100"
                  type="text"
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
              <div
                class="wrap-input100 validate-input m-b-16"
                data-validate="Please enter username"
              >
                <input
                  class="input100"
                  type="text"
                  name="username"
                  value={rollno}
                  onChange={e => setrollno(e.target.value)}
                  placeholder="Roll Number"
                />
                <span class="focus-input100" />
              </div>
              <div
                class="wrap-input100 validate-input m-b-16"
                data-validate="Please enter username"
              >
                <input
                  class="input100"
                  type="text"
                  name="username"
                  value={mobile}
                  onChange={e => setmobile(e.target.value)}
                  placeholder="Mobile"
                />
                <span class="focus-input100" />
              </div>
              <br />
              <div class="container-login100-form-btn">
                <button
                  class="login100-form-btn"
                  onClick={() => {
                    navigate("/changepassword");
                  }}
                >
                  Change Password
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

export default Userprofile;
