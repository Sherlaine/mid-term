"use strict";

const express = require('express');
const router  = express.Router();

const favorites =
  [{
    id: 1,
    map_id: 1,
    user_id: 1
  }]

module.exports = () => {
  router.get("/", (req, res) => {
    res.send(favorites);
  });

  return router;
}
