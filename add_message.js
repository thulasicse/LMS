import React, { useState } from "react";
import "../css/signup.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Adminnavbar from "../navbar/admin_navbar";

function Addmessage() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  var currentdate = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
  const handleSubmit = e => {
    e.preventDefault();
    if (email === "" || message === "") {
      alert("please fill all fields");
    } else {
      Axios.post("http://localhost:3001/addmessage", {
        email: email,
        message: message,
        currentdate: currentdate
      }).then(response => {
        if (response.data == "Message sent successfully") {
          alert("Message Sent successfully");
        }
        setemail("");
        setmessage("");
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
          <div class="wrap-login100" style={{ height: "462px" }}>
            <form class="login100-form validate-form p-l-55 p-r-55 p-t-178">
              <span class="login100-form-title">Send Message</span>

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
                class="wrap-input100 validate-input m-b-16"
                data-validate="Please enter username"
              >
                <input
                  class="input100"
                  type="text"
                  name="username"
                  value={message}
                  onChange={e => setmessage(e.target.value)}
                  placeholder="Message"
                />
                <span class="focus-input100" />
              </div>

              <br />
              <div class="container-login100-form-btn">
                <button class="login100-form-btn" onClick={handleSubmit}>
                  Add Message
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

export default Addmessage;
