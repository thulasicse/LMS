import React from "react";
import Adminnavbar from "../navbar/admin_navbar";
import Bookdashboard from "./book_dashboard";

const Adminhomepage = () => {
  return (
    <div>
      <Adminnavbar />
      <Bookdashboard />
    </div>
  );
};

export default Adminhomepage;
