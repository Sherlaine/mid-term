"use strict";

const express = require('express');
const router  = express.Router();
const mapsModelFunction = require('../models/mapmodels');

const maps =
  [{
    id: 1,
    user_id: 1,
    title: 'Bakeries'
  }]

module.exports = (knex) => {
  if (!knex) throw new Error('We definitely knex!');
  const mapsModel = mapsModelFunction(knex)
  // get some params from request
  // fetch from the database
  // send the result back
  router.get("/", (req, res) => {
    const mapsWithMarkers = mapsModel.getMapsWithMarkers();
    return mapsWithMarkers.then(maps => {
      console.log("maps is here", maps);
      res.json(maps)
    })
  });

  return router;
};