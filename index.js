const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const signupmodel = require("./models/signupmodel");
const adminmodel = require("./models/adminmodel");
const bookmodel = require("./models/bookmodel");
const issuebookmodel = require("./models/issuebookmodel");
const requestmodel = require("./models/requestmodel");
const messagemodel = require("./models/message");

app.use(cors());
app.use(express.json());

mongoose.connect(
  // "mongodb+srv://velmurugan:Ajith004@librarymanagementsystem.5sbybsg.mongodb.net/librarymanagementsystem?retryWrites=true&w=majority",
  "mongodb+srv://thulasicse790:t7CcnyzcLODpyTNk@librarymanagementsystem.h0rcx.mongodb.net/librarymanagementsystem?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.post("/signup", (req, res) => {
  var username = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
  var rollnumber = req.body.rollno;
  var mobile = req.body.mobile;
  console.log(username, email, password, rollnumber, mobile);
  const datamodel = new signupmodel({
    username: username,
    email: email,
    password: password,
    rollnumber: rollnumber,
    mobile: mobile
  });
  try {
    datamodel.save();
    res.send("Account created successfully");
  } catch (error) {
    console.log(error);
  }
});

app.post("/addmessage", (req, res) => {
  var email = req.body.email;
  var message = req.body.message;
  var currentdate = req.body.currentdate;
  console.log(email, message, currentdate);
  const sendmessage = new messagemodel({
    email: email,
    message: message,
    currentdate: currentdate
  });
  try {
    sendmessage.save();
    res.send("Message sent successfully");
  } catch (error) {
    console.log(error);
  }
});

app.post("/issuebook", (req, res) => {
  var bookname = req.body.name;
  var email = req.body.email;
  var currentdate = req.body.currentdate;
  var totalbooks = req.body.totalbooks;
  var remainingcopy = parseInt(totalbooks) - 1;
  var bookid = req.body.bookid;

  console.log(bookname, email, currentdate, remainingcopy, bookid);
  const datamodel = new issuebookmodel({
    bookname: bookname,
    email: email,
    currentdate: currentdate,
    status: "issued"
  });
  try {
    datamodel.save();
    bookmodel.findById(bookid, (err, data) => {
      if (!data) {
        console.log("no data");
      } else {
        // console.log(data.enddate);
        data.totalcopies = remainingcopy;
        data.save();
        res.send("Book issued successfully");
      }
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/addadmin", (req, res) => {
  var username = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
  var address = req.body.address;
  var mobile = req.body.mobile;
  console.log(username, email, password, address, mobile);
  const datamodel = new adminmodel({
    username: username,
    email: email,
    password: password,
    address: address,
    mobile: mobile
  });
  try {
    datamodel.save();
    res.send("Admin added successfully");
  } catch (error) {
    console.log(error);
  }
});

app.post("/addbooks", (req, res) => {
  var title = req.body.title;
  var author = req.body.author;
  var publisher = req.body.publisher;
  var year = req.body.year;
  var totalcopies = req.body.totalcopies;
  console.log(title, author, publisher, year, totalcopies);
  const datamodel = new bookmodel({
    title: title,
    author: author,
    publisher: publisher,
    year: year,
    totalcopies: totalcopies
  });
  try {
    datamodel.save();
    res.send("Book added successfully");
  } catch (error) {
    console.log(error);
  }
});

app.post("/insertrequest", (req, res) => {
  var email = req.body.email;
  var bookname = req.body.bookname;
  var status = req.body.status;
  var currentdate = req.body.currentdate;
  console.log(email, bookname, status, currentdate);
  const datamodel = new requestmodel({
    email: email,
    bookname: bookname,
    status: status,
    currentdate: currentdate
  });
  try {
    datamodel.save();
    res.send("Book requested successfully");
  } catch (error) {
    console.log(error);
  }
});

app.get("/getbooks", (req, res) => {
  bookmodel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.json(result);
  });
});

app.get("/getbookrequests", (req, res) => {
  requestmodel.find({ status: "pending" }, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.json(result);
  });
});

app.get("/getmessages", (req, res) => {
  var email = req.query.email;
  messagemodel.find({ email: email }, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.json(result);
  });
});

app.get("/getmybooks", (req, res) => {
  var email = req.query.email;
  var status = req.query.status;
  requestmodel.find({ email: email, status: status }, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.json(result);
  });
});

app.get("/getbookcount", (req, res) => {
  var bookname = req.query.bookname;
  console.log(bookname);
  bookmodel.find({ title: bookname }, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.json(result);
  });
});

app.get("/getusers", (req, res) => {
  signupmodel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.json(result);
  });
});

app.get("/adminlogin/:password", (req, res) => {
  var password = req.params.password;
  console.log(password);
  adminmodel.find({ password: password }, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
    console.log(result);
  });
});

app.put("/changepassword", async (req, res) => {
  var id = req.body.id;
  var email = req.body.email;
  var password = req.body.password;

  console.log(id, email, password);
  try {
    await signupmodel.findById(id, (err, data) => {
      if (!data) {
        console.log("no data");
      } else {
        data.email = email;
        data.password = password;
        data.save();
        res.send("password updated successfully");
      }
    });
  } catch (error) {
    console.log(error);
  }
});

app.put("/editbooks", async (req, res) => {
  var id = req.body.id;
  var title = req.body.title;
  var author = req.body.author;
  var publisher = req.body.publisher;
  var year = req.body.year;
  var totalcopies = req.body.totalcopies;

  console.log(id, title, author, publisher, year, totalcopies);
  try {
    await bookmodel.findById(id, (err, data) => {
      if (!data) {
        console.log("no data");
      } else {
        data.title = title;
        data.author = author;
        data.publisher = publisher;
        data.year = year;
        data.totalcopies = totalcopies;
        data.save();
        res.send("book updated successfully");
      }
    });
  } catch (error) {
    console.log(error);
  }
});

app.put("/updaterequeststatus", async (req, res) => {
  var id = req.body.id;
  var status = req.body.status;
  console.log(id, status);
  try {
    await requestmodel.findById(id, (err, data) => {
      if (!data) {
        console.log("no data");
      } else {
        if (status == "approved") {
          data.status = "approved";
          data.save();
          res.send("request approved successfully");
        } else {
          data.status = "rejected";
          data.save();
          res.send("request rejected successfully");
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
});

app.put("/updatebookrequeststatus", async (req, res) => {
  var id = req.body.id;
  var status = req.body.status;
  var bookname = req.body.bookname;
  console.log(id, status, bookname);
  try {
    await requestmodel.findById(id, (err, data) => {
      if (!data) {
        console.log("no data");
      } else {
        data.status = "completed";
        data.save();
      }
    });
  } catch (error) {
    console.log(error);
  }
});

app.put("/updatebookcount", async (req, res) => {
  var id = req.body.id;
  var count = req.body.count;
  console.log(id, count);
  try {
    await bookmodel.findById(id, (err, data) => {
      if (!data) {
        console.log("no data");
      } else {
        data.totalcopies = parseInt(count) + 1;
        data.save();
      }
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/userlogin/:password", (req, res) => {
  var password = req.params.password;
  console.log(password);
  signupmodel.find({ password: password }, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
    console.log(result);
  });
});

app.delete("/deletebook", async (req, res) => {
  var bookname = req.query.bookname;
  console.log(bookname);
  await bookmodel.remove({
    title: bookname
  });
});

app.delete("/deleteuser", async (req, res) => {
  var email = req.query.email;
  console.log(email);
  await signupmodel.remove({
    email: email
  });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
