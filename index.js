const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;


// Middleware
app.use(express.json());

const userRoutes = require("./routes/user");
app.use("/api/v1", userRoutes);

// CORS Configuration
app.listen(PORT, () => {
  console.log(`THE SERVER IS RUNNING AT PORT ${PORT}`);
});

const dbConnect = require("./config/Database");
dbConnect();

app.get("/", (req, res) => {
  res.send(`<h1>Backend is Running and this is '/' Route</h1>`);
});
