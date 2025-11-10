const express = require("express");
const app = express();
const port = 8000;

// Routes
app.get("/", (req, res) => res.send("Hello baba.com World"));
app.get("/about", (req, res) => res.send("<h1>This is about page</h1>"));

// Start server
app.listen(port, () => console.log(`Node server is running on port ${port}...`));
