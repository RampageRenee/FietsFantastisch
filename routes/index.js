const express = require("express");

const medewerkersRoute = require("./medewerkers");
/* const fietsenRoute
const klantenRoute
const accsoiresRoute */

const router = express.Router();

module.exports = (params) => {
  router.get("/", (request, response) => {
    response.render("paginas/index", { paginaTitel: "Welkom" });
  });

  router.use("/medewerkers", medewerkersRoute(params));
  /* fietsenRoute()
  klantenRoute()
  accesoiresRoute() */

  return router;
};
