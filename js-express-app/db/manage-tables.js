const db = require("../db/connection");

exports.dropTables = () => {
  return db.query("DROP TABLE IF EXISTS products;").then(() => {});
};

exports.createTables = () => {
  return db.query(`CREATE TABLE products (
        product_id SERIAL PRIMARY KEY,
        title VARCHAR NOT NULL,
        brand VARCHAR NOT NULL
    );`);
};
