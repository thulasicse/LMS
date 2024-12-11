import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/home_page";
import Signup from "./pages/signup";
import Userlogin from "./pages/user_login";
import Adminlogin from "./pages/admin_login";
import Adminhomepage from "./pages/adminhome_page";
import Addadmin from "./pages/add_admin";
import Addbooks from "./pages/add_books";
import Viewbooks from "./pages/view_books";
import Viewusers from "./pages/view_users";
import Bookdashboard from "./pages/book_dashboard";
import IssueBook from "./pages/issue_book";
import Adminprofile from "./pages/admin_profile";
import Userhomepage from "./pages/userhomepage";
import Userprofile from "./pages/user_profile";
import Changepassword from "./pages/change_password";
import Librarybooks from "./pages/userbooks_page";
import Viewbookrequests from "./pages/viewbookrequests";
import Mybookings from "./pages/my_bookings";
import Editbooks from "./pages/edit_book";
import Addmessage from "./pages/add_message";
import Viewmessages from "./pages/view_messages";

function App() {
  return (
   <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup"element={<Signup/>}/>
        <Route path="/userlogin"element={<Userlogin/>}/>
        <Route path="/adminlogin"element={<Adminlogin/>}/>
        <Route path="/adminhomepage"element={<Adminhomepage/>}/>
        <Route path="/addadmin"element={<Addadmin/>}/>
        <Route path="/addbooks"element={<Addbooks/>}/>
        <Route path="/deletebooks"element={<Viewbooks/>}/>
        <Route path="/deleteuser"element={<Viewusers/>}/>
        <Route path="/bookdashboard"element={<Bookdashboard/>}/>
        <Route path="/issuebook"element={<IssueBook/>}/>
        <Route path="/adminprofile"element={<Adminprofile/>}/>
        <Route path="/userhomepage"element={<Userhomepage/>}/>
        <Route path="/userprofile"element={<Userprofile/>}/>
        <Route path="/changepassword"element={<Changepassword/>}/>
        <Route path="/librarybooks"element={<Librarybooks/>}/>
        <Route path="/bookrequests"element={<Viewbookrequests/>}/>
        <Route path="/mybooks"element={<Mybookings/>}/>
        <Route path="/editbook"element={<Editbooks/>}/>
        <Route path="/addmessage"element={<Addmessage/>}/>
        <Route path="/viewmessages"element={<Viewmessages/>}/>
      </Routes>
    </>
  );
}

export default App;
