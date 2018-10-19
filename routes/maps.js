"use strict";

const express = require('express');
const router  = express.Router();

const maps =
  [{
    id: 1,
    user_id: 1,
    title: 'Bakeries'
  }]

module.exports = () => {
  router.get("/", (req, res) => {
    res.send(maps);
  });

  return router;
}




