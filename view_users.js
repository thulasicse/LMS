import axios from "axios";
import React, { useState, useEffect } from "react";
import Adminnavbar from "../navbar/admin_navbar";
import "../css/table.css";

const Viewusers = () => {
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/getusers").then(response => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div>
      <Adminnavbar />
      <br />
      <h2 className="text-center" style={{ color: "white" }}>
        DELETE USERS
      </h2>
      <br />
      <br />
      <div className="row">
        <table className="table table-striped table-bordered" id="table">
          <thead>
            <tr>
              <th className="text-center">Name</th>
              <th className="text-center">Roll No</th>
              <th className="text-center">Mobile</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {Users.map(data =>
              <tr key={data.id}>
                <td>
                  {" "}{data.username}{" "}
                </td>
                <td>
                  {" "}{data.rollnumber}
                </td>
                <td>
                  {" "}{data.mobile}
                </td>
                <td>
                  {" "}<i
                    onClick={() => {
                      axios
                        .delete("http://localhost:3001/deleteuser", {
                          params: {
                            email: data.email
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

export default Viewusers;
