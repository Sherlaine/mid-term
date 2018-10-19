"use strict";

const express = require('express');
const router  = express.Router();

const markers =
  [{
    id: 1,
    map_id: 1,
    lat: 70,
    lng: 40,
    description: "The dumpster's behind La Croix Bakery host a plethora of delectable delicacies."
  }]

module.exports = () => {
  router.get("/", (req, res) => {
    res.send(markers);
  });

  return router;
}




