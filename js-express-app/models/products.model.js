const db = require("../db/connection");


exports.fetchProducts = () => {
  return db.query("SELECT * FROM products").then(({ rows }) => {
    return rows;
  });
};
