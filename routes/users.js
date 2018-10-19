"use strict";

const express = require('express');
const router  = express.Router();

const users =
  [{
    id: 1,
    name: 'Linda'
  }]

module.exports = () => {
  router.get("/", (req, res) => {
    res.send(users);
  });

  return router;
}
