const express = require("express");
const cors = require("cors");
const { getProducts } = require("./controllers/products.controller");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/products", getProducts);

module.exports = app;
