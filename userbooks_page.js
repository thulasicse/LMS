import axios from "axios";
import React, { useState, useEffect } from "react";
import Adminnavbar from "../navbar/admin_navbar";
import "../css/table.css";

const Librarybooks = () => {
  const [Books, setBooks] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/getbooks").then(response => {
      setBooks(response.data);
    });
  }, []);

  return (
    <div>
      <br />
      <h2 className="text-center" style={{ color: "white" }}>
        LIBRARY BOOKS
      </h2>
      <br />
      <br />
      <div className="row">
        <table className="table table-striped table-bordered" id="table">
          <thead>
            <tr>
              <th className="text-center">Name</th>
              <th className="text-center">Author</th>
              <th className="text-center">Total Copies</th>
              <th className="text-center">Request</th>
            </tr>
          </thead>
          <tbody>
            {Books.map(data =>
              <tr key={data.id}>
                <td>
                  {" "}{data.title}{" "}
                </td>
                <td>
                  {" "}{data.author}
                </td>
                <td>
                  {" "}{data.totalcopies}
                </td>
                <td>
                  {" "}<i
                    onClick={() => {
                      axios
                        .post("http://localhost:3001/insertrequest", {
                          email: localStorage.getItem("email"),
                          bookname: data.title,
                          status: "pending",
                          currentdate: new Date().toISOString().slice(0, 10)
                        })
                        .then(response => {
                          if (response.data == "Book requested successfully") {
                            alert("Book requested successfully");
                          }
                        });
                    }}
                    className="glyphicon glyphicon-ok"
                    style={{ fontSize: "24px", color: "red" }}
                  />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Librarybooks;
