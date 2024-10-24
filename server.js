const express = require('express');
const app = express();

// Load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON requests
app.use(express.json());

// Import routes
const todoRoutes = require("./routes/todo.route.js");

// Mount todo API routes with correct path
app.use("/api/v1", todoRoutes); 

// DB connection
const dbconnect = require('./config/database.js');

// Start the server
app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`); 
    dbconnect();
});

// Default route
app.get('/', (req, res) => {
    res.send("Default Route");
});
