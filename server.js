const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

app.use(cors()); // Enable CORS

app.get("/", (req, res) => {
  const data = {
    email: process.env.EMAIL,
    current_time: new Date().toISOString(),
    github_url: process.env.URL,
  };

  res.status(200).json(data);
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at port http://localhost:${process.env.PORT}`);
});
