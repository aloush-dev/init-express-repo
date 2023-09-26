const { fetchProducts } = require("../models/products.model");

exports.getProducts = (req, res) => {
  fetchProducts().then((products) => {
    res.status(200).send({ products });
  });
};
