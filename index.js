const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const router = require("./src/routers/roots")

require("dotenv").config();
app.use("/",router)
const dbConnect = require("./src/config/db");
dbConnect();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
