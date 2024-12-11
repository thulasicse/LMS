import axios from "axios";
import React, { useState, useEffect } from "react";
import Adminnavbar from "../navbar/admin_navbar";
import "../css/table.css";
import { useNavigate } from "react-router-dom";

const Bookdashboard = () => {
  const [Books, setBooks] = useState([]);
  const navigate = useNavigate();
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
              <th className="text-center">Issue Book</th>
              <th className="text-center">Edit</th>
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
                      localStorage.setItem("totalbooks", data.totalcopies);
                      localStorage.setItem("bookid", data._id);
                      localStorage.setItem("bookname", data.title);
                      navigate("/issuebook");
                    }}
                    className="fa fa-edit"
                    style={{ fontSize: "24px", color: "red" }}
                  />
                </td>
                <td>
                  {" "}<i
                    onClick={() => {
                      localStorage.setItem("totalbooks", data.totalcopies);
                      localStorage.setItem("bookid", data._id);
                      localStorage.setItem("bookname", data.title);
                      localStorage.setItem("bookauthor", data.author);
                      localStorage.setItem("publisher", data.publisher);
                      localStorage.setItem("year", data.year);

                      navigate("/editbook");
                    }}
                    className="fa fa-edit"
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

export default Bookdashboard;
