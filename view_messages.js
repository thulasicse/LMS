import axios from "axios";
import React, { useState, useEffect } from "react";
import Adminnavbar from "../navbar/admin_navbar";
import "../css/table.css";

const Viewmessages = () => {
  const [Messages, setMessages] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/getmessages", {
        params: {
          email: localStorage.getItem("email")
        }
      })
      .then(response => {
        setMessages(response.data);
      });
  }, []);

  return (
    <div>
      <Adminnavbar />
      <br />
      <h2 className="text-center" style={{ color: "white" }}>
        Your Messages
      </h2>
      <br />
      <br />
      <div className="row">
        <table className="table table-striped table-bordered" id="table">
          <thead>
            <tr>
              <th className="text-center">Date</th>
              <th className="text-center">Message</th>
            </tr>
          </thead>
          <tbody>
            {Messages.map(data =>
              <tr key={data.id}>
                <td>
                  {" "}{data.currentdate}{" "}
                </td>
                <td>
                  {" "}{data.message}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Viewmessages;
