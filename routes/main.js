// routes/main.js
const express = require("express");
const router = express.Router();

// Routes
router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/about", (req, res) => {
  res.send("<h1>This is about page</h1>");
});

router.get("/contact", (req, res) => {
  res.send("<h1>For Queries Use the Given Email</h1><br><h5>abc@gmail.com</h5>");
});

router.get("/date", (req, res) => {
  const today = new Date().toDateString();
  res.send(`<p>Today the date is: <strong>${today}</strong></p>`);
});

//   Parameterised route
router.get("/welcome/:name", (req, res) => {
  const userName = req.params.name;
  res.send(`<h1>Welcome ${userName}!</h1>`);
});

//  Chaining route handlers
router.get("/chain", 
  (req, res, next) => {
    console.log("First handler: User visited /chain");
    req.message = "Hello from the first handler!";
    next(); // Pass control to the next handler
  },
  (req, res) => {
    res.send(`<h1>Second handler: ${req.message}</h1>`);
  }
);


// Export router
module.exports = router;
