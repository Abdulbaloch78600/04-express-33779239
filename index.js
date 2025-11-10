const express = require("express");
const app = express();
const port = 8000;

// Routes
app.get("/", (req, res) => res.send("Hello World"));
app.get("/about", (req, res) => res.send("<h1>This is about page</h1>"));
app.get("/contact",(req,res)=> res.send("<h1> For Quries Use the Given Email</1h><br> <h5> abc@gmail.com</h5>"))
app.get("/date", (req, res) => {
    res.send(`<p>Today the date is: <strong>${new Date().toDateString()}</strong></p>`);
  });
  
// Start server
app.listen(port, () => console.log(`Node server is running on port ${port}...`));
