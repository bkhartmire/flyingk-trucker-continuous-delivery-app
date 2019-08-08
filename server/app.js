// server/app.js
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("./knex.js");

const app = express();

// Setup logger
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/api/locations", async (req, res) => {
  try {
    const locations = await db.select().table("locations");
    res.json(locations);
  } catch (err) {
    console.error("Error loading locations!", err);
    res.sendStatus(500);
  }
});

app.get("/api/locations/:id", async (req, res) => {
  try {
  } catch (err) {
    console.error("Error getting location information!", err);
    res.sendStatus(500);
  }
});

app.get("/api/amenities", async (req, res) => {
  try {
    const amenities = await db.select().table("amenities");
    res.json(amenities);
  } catch (err) {
    console.error("Error loading amenitites!", err);
    res.sendStatus(500);
  }
});

app.get("/api/restaurants", async (req, res) => {
  try {
    const restaurants = await db.select().table("restaurants");
    res.json(restaurants);
  } catch (err) {
    console.error("Error loading restaurants!", err);
    res.sendStatus(500);
  }
});

app.get("/api/gastypes", async (req, res) => {
  try {
    const gasTypes = await db.select().table("gas_types");
    res.json(gasTypes);
  } catch (err) {
    console.error("Error loading gas types!", err);
    res.sendStatus(500);
  }
});

// Always return the main index.html, so react-router render the route in the client
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

module.exports = app;
