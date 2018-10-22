"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();

const knexConfig  = require("./knexfile");
// This initializes our connection to the database
// We get a connection object in return called KNEX
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

// Seperated Routes for each Resource
const markerRoutes  = require("./routes/markers");
const mapRoutes     = require("./routes/maps");
const userRoutes    = require("./routes/users");
const favRoutes     = require("./routes/favorites");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// // Mount all resource routes
// app.use("/api/users", usersRoutes(knex));

// import marker routes
app.use("/api/markers", markerRoutes(knex));

// import map routes
app.use("/api/maps", mapRoutes(knex));

// import user routes
app.use("/api/users", userRoutes(knex));

// import favorite routes
app.use("/api/favorites", favRoutes(knex));

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
