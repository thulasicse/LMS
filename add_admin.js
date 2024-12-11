import React, { useState } from "react";
import "../css/signup.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Adminnavbar from "../navbar/admin_navbar";

function Addadmin() {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [address, setaddress] = useState("");
  const [mobile, setmobile] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      address === "" ||
      mobile === ""
    ) {
      alert("please fill all fields");
    } else {
      Axios.post("http://localhost:3001/addadmin", {
        name: name,
        email: email,
        password: password,
        address: address,
        mobile: mobile
      }).then(response => {
        if (response.data == "Admin added successfully") {
          alert("Admin added successfully");
        }
        setname("");
        setemail("");
        setpassword("");
        setaddress("");
        setmobile("");
      });
    }
  };

  return (
    <div>
      <Adminnavbar />
      <div class="limiter" style={{ marginTop: "2%" }}>
        <div
          class="container-login100"
          style={{ backgroundColor: "transparent", marginTop: "-2%" }}
        >
          <div class="wrap-login100" style={{ height: "662px" }}>
            <form class="login100-form validate-form p-l-55 p-r-55 p-t-178">
              <span class="login100-form-title">Add Admin</span>

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
                  value={address}
                  onChange={e => setaddress(e.target.value)}
                  placeholder="Address"
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
                <button class="login100-form-btn" onClick={handleSubmit}>
                  Add Admin
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

export default Addadmin;
