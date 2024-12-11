import React, { useState } from "react";
import "../css/signup.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Adminnavbar from "../navbar/admin_navbar";

function IssueBook() {
  const navigate = useNavigate();
  const [name, setname] = useState(localStorage.getItem("bookname"));
  const [email, setemail] = useState("");
  var today = new Date().toISOString().slice(0, 10);
  const handleSubmit = e => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("please fill all fields");
    } else {
      Axios.post("http://localhost:3001/issuebook", {
        name: name,
        email: email,
        totalbooks: localStorage.getItem("totalbooks"),
        bookid: localStorage.getItem("bookid"),
        currentdate: today
      }).then(response => {
        if (response.data == "Book issued successfully") {
          alert("Book issued successfully");
        }
        setname("");
        setemail("");
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
          <div class="wrap-login100" style={{ height: "500px" }}>
            <form class="login100-form validate-form p-l-55 p-r-55 p-t-178">
              <span class="login100-form-title">Issue Book </span>

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
                  placeholder="Book Name"
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

              <br />
              <div class="container-login100-form-btn">
                <button class="login100-form-btn" onClick={handleSubmit}>
                  Issue Book
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

export default IssueBook;
