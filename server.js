var compression = require("compression");
const express = require("express");
const path = require("path");
const app = express();

app.use(compression());
app.use(express.static(__dirname + "/dist/AngulatCat"));
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/AngulatCat/index.html"));
});
app.listen(process.env.PORT || 3000);