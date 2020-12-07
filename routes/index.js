const express = require("express");

const medewerkersRoute = require("./medewerkers");
/* const fietsenRoute
const klantenRoute
const accsoiresRoute */

const router = express.Router();

module.exports = (params) => {
  router.get("/", (request, response) => {
    if (!request.session.visitcount) {
      request.session.visitcount = 0;
    }

    request.session.visitcount += 1;

    console.log(`Aantal bezoeken op de pagina: ${request.session.visitcount}`);

    response.render("paginas/index", { paginaTitel: "Welkom" });
  });

  router.use("/medewerkers", medewerkersRoute(params));
  /* fietsenRoute()
  klantenRoute()
  accesoiresRoute() */

  return router;
};
