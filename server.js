const express = require("express");
const path = require("path");

const app = express();

const port = 8000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.static(path.join(__dirname, "./HTMLNode")));

app.listen(port, () => {
  console.log(`Express server listning on port ${port}!`);
});
