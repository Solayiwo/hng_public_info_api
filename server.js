const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors()); // Enable CORS

app.get("/", (req, res) => {
  const data = {
    email: "shinar930@gmail.com",
    current_time: new Date().toISOString(),
    github_url: "https://github.com/Solayiwo/hng_public_info_api.git",
  };

  res.status(200).json(data);
});

app.listen(4500, () => {
  console.log(`Server is running at port http://localhost:${4500}`);
});
