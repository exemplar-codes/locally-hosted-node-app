const express = require("express");
const res = require("express/lib/response");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello").status(200);
  res.end();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
