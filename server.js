const express = require("express");
const path = require("path");

const app = express();

const port = 8000;

app.use(express.static(path.join(__dirname, "./HTMLNode")));

app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "./HTMLNode/index.html"));
});

/* app.get("/fiets", (request, response) => {
  response.sendFile(path.join(__dirname, "./HTMLNode/fiets.html"));
});
app.get("/accesoires", (request, response) => {
  response.sendFile(path.join(__dirname, "./HTMLNode/accesoires.html"));
});
app.get("/klanten", (request, response) => {
  response.sendFile(path.join(__dirname, "./HTMLNode/klanten.html"));
});
app.get("/medewerker", (request, response) => {
  response.sendFile(path.join(__dirname, "./HTMLNode/medewerker.html"));
}); */

app.listen(port, () => {
  console.log(`Express server listning on port ${port}!`);
});
