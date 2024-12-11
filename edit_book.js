import React, { useState } from "react";
import "../css/signup.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Adminnavbar from "../navbar/admin_navbar";

function Editbooks() {
  const navigate = useNavigate();
  const [title, settitle] = useState(localStorage.getItem("bookname"));
  const [author, setauthor] = useState(localStorage.getItem("bookauthor"));
  const [publisher, setpublisher] = useState(localStorage.getItem("publisher"));
  const [year, setyear] = useState(localStorage.getItem("year"));
  const [totalcopies, settotalcopies] = useState(
    localStorage.getItem("totalbooks")
  );

  const handleSubmit = e => {
    e.preventDefault();
    if (
      title === "" ||
      author === "" ||
      publisher === "" ||
      year === "" ||
      totalcopies === ""
    ) {
      alert("please fill all fields");
    } else {
      Axios.put("http://localhost:3001/editbooks", {
        id: localStorage.getItem("bookid"),
        title: title,
        author: author,
        publisher: publisher,
        year: year,
        totalcopies: totalcopies
      }).then(response => {
        if (response.data == "book updated successfully") {
          alert("book updated successfully");
        }
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
              <span class="login100-form-title">Update Books</span>

              <div
                class="wrap-input100 validate-input m-b-16"
                data-validate="Please enter username"
              >
                <input
                  class="input100"
                  type="text"
                  name="username"
                  value={title}
                  onChange={e => settitle(e.target.value)}
                  placeholder="Book Title"
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
                  value={author}
                  onChange={e => setauthor(e.target.value)}
                  placeholder="Book Author"
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
                  value={publisher}
                  onChange={e => setpublisher(e.target.value)}
                  name="pass"
                  placeholder="Book Publisher"
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
                  value={year}
                  onChange={e => setyear(e.target.value)}
                  placeholder="Book Year"
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
                  value={totalcopies}
                  onChange={e => settotalcopies(e.target.value)}
                  placeholder="Book Total Copies"
                />
                <span class="focus-input100" />
              </div>
              <br />
              <div class="container-login100-form-btn">
                <button class="login100-form-btn" onClick={handleSubmit}>
                  Update Book
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

export default Editbooks;
