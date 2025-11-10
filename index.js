// index.js
const express = require("express");
const app = express();
const port = 8001;

// Import route handlers
const mainRoutes = require("./routes/main");

// Use the routes
app.use("/", mainRoutes);

// Start listening for HTTP requests
app.listen(port, () => {
  console.log(`Node server is running on port ${port}...`);
});
