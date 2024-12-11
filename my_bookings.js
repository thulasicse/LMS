import axios from "axios";
import React, { useState, useEffect } from "react";
import Adminnavbar from "../navbar/admin_navbar";
import "../css/table.css";
import Usernavbar from "../navbar/user_navbar";

const Mybookings = () => {
  const [Books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/getmybooks", {
        params: {
          email: localStorage.getItem("email"),
          status: "approved"
        }
      })
      .then(response => {
        console.log(response.data);
        setBooks(response.data);
      });
  }, []);

  return (
    <div>
      <Usernavbar />
      <br />
      <h2 className="text-center" style={{ color: "white" }}>
        YOUR BOOKS
      </h2>
      <br />
      <br />
      <div className="row">
        <table className="table table-striped table-bordered" id="table">
          <thead>
            <tr>
              <th className="text-center">Book Name</th>
              <th className="text-center">Status</th>
              <th className="text-center">Return</th>
            </tr>
          </thead>
          <tbody>
            {Books.map(data =>
              <tr key={data.id}>
                <td>
                  {" "}{data.bookname}
                </td>
                <td>
                  {" "}{data.status}{" "}
                </td>
                <td>
                  {" "}<i
                    onClick={() => {
                      axios.put(
                        "http://localhost:3001/updatebookrequeststatus",
                        {
                          id: data._id,
                          bookname: data.bookname,
                          status: "completed"
                        }
                      );
                      axios
                        .get("http://localhost:3001/getbookcount", {
                          params: {
                            bookname: data.bookname
                          }
                        })
                        .then(response => {
                          console.log(response.data);
                          axios
                            .put("http://localhost:3001/updatebookcount", {
                              id: response.data[0]._id,
                              count: response.data[0].totalcopies
                            })
                            .then(() => {
                              window.location.reload(true);
                            });
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

export default Mybookings;
