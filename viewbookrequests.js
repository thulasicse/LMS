import axios from "axios";
import React, { useState, useEffect } from "react";
import Adminnavbar from "../navbar/admin_navbar";
import "../css/table.css";

const Viewbookrequests = () => {
  const [Books, setBooks] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/getbookrequests").then(response => {
      console.log(response.data);
      setBooks(response.data);
    });
  }, []);

  return (
    <div>
      <Adminnavbar />
      <br />
      <h2 className="text-center" style={{ color: "white" }}>
        PENDING BOOK REQUESTS
      </h2>
      <br />
      <br />
      <div className="row">
        <table className="table table-striped table-bordered" id="table">
          <thead>
            <tr>
              <th className="text-center">Email</th>
              <th className="text-center">Book Name</th>
              <th className="text-center">Approve</th>
              <th className="text-center">Reject</th>
            </tr>
          </thead>
          <tbody>
            {Books.map(data =>
              <tr key={data.id}>
                <td>
                  {" "}{data.email}{" "}
                </td>
                <td>
                  {" "}{data.bookname}
                </td>
                <td>
                  {" "}<i
                    onClick={() => {
                      axios
                        .put("http://localhost:3001/updaterequeststatus", {
                          id: data._id,
                          status: "approved"
                        })
                        .then(() => {
                          window.location.reload(true);
                        });
                    }}
                    className="glyphicon glyphicon-ok"
                    style={{ fontSize: "24px", color: "red" }}
                  />
                </td>
                <td>
                  {" "}<i
                    onClick={() => {
                      axios
                        .put("http://localhost:3001/updaterequeststatus", {
                          id: data._id,
                          status: "rejected"
                        })
                        .then(() => {
                          window.location.reload(true);
                        });
                    }}
                    className="glyphicon glyphicon-remove"
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

export default Viewbookrequests;
