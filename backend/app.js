const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

/**
 * Route setup.
 * Order of precedence matters
 */
app.use("/", (req, res) => {
  console.log("root");
  res.send();
});

module.exports = app;
