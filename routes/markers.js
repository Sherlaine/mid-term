"use strict";

const express = require('express');
const router  = express.Router();

const markers = 
  [{
    name: 'Linda',
    lat: 70,
    lng: 40
  }]

module.exports = () => {
  router.get("/", (req, res) => {
    res.send(markers);
  });
  
  return router;
}




