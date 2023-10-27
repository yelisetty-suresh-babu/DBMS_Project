const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
require("./config");



app.listen(4000);
app.get("", (req, res) => {

  res.send("Hello world");
});
