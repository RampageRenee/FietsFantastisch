const express = require("express");
const path = require("path");
// const cookieSession = require("cookie-session");

const MedewerkerService = require("./services-control/MedewerkerService");
/* const KlantenService
const FietsenService
const AccesoiresService */

const medewerkerService = new MedewerkerService("./data/medewerkers.json");
/* const klantenService = new klantenService
const fietsenService
const accsoiresService  */

const routes = require("./routes");

const app = express();

const port = 8000;

app.set("trust proxy", 1);

// app.use(
//   cookieSession({
//     name: "session",
//     keys: ["Sontarian327845310", "GloriE13842684"],
//   })
// );

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.static(path.join(__dirname, "./HTMLpassiefMod3")));

app.use(
  "/",
  routes({
    medewerkerService,
    /* klantenService,
  fietsenService,
  accecoiresService, */
  })
);

app.listen(port, () => {
  console.log(`Express server listning on port ${port}!`);
});
