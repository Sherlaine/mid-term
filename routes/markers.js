"use strict";

const express = require('express');
const router = express.Router();
const markerModelFunction = require('../models/markermodels');

// const markers = [{
//   id: 1,
//   map_id: 1,
//   lat: 70,
//   lng: 40,
//   description: "The dumpster's behind La Croix Bakery host a plethora of delectable delicacies."
// }]

module.exports = (knex) => {
  if (!knex) throw new Error('We definitely knex!');
  const markerModel = markerModelFunction(knex);
    // get all markers
  router.get("/", (req, res) => {
    const markersPromise = markerModel.getMarkers(); // waiting for a request for markers, need an array of markers
    return markersPromise.then(markers => res.send(markers));
  });
  
  router.post("/", (req, res) => {
    // Create a new marker
    // Grab new marker data from req.body
    // Create a new marker with knex
    // send the created marker as response
    
    const markerData = req.body;
    console.log('marker data', markerData)
    console.log('type of marker', typeof markerData)

    const createdMarker = markerModel.createMarker(markerData);

    return createdMarker.then(marker => res.send(marker));
  })

  return router;
}