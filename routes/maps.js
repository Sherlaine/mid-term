"use strict";

const express = require('express');
const router  = express.Router();

const maps = 
  [{
    user_id: 1,
    title: 'Bakeries',
    markers: {
      marker_id: {
        lat: 70,
        lng: 40
      }
    }
  }]

module.exports = () => {
  router.get("/", (req, res) => {
    res.send(maps);
  });
  
  return router;
}




