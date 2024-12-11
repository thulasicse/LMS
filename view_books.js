import axios from "axios";
import React, { useState, useEffect } from "react";
import Adminnavbar from "../navbar/admin_navbar";
import "../css/table.css";

const Viewbooks = () => {
  const [Books, setBooks] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/getbooks").then(response => {
      setBooks(response.data);
    });
  }, []);

  return (
    <div>
      <Adminnavbar />
      <br />
      <h2 className="text-center" style={{ color: "white" }}>
        DELETE BOOKS
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
              <th className="text-center">Delete</th>
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
                        .delete("http://localhost:3001/deletebook", {
                          params: {
                            bookname: data.title
                          }
                        })
                        .then(() => {
                          window.location.reload(true);
                        });
                    }}
                    className="fa fa-trash-o"
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

export default Viewbooks;
