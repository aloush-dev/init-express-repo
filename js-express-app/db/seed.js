const db = require("./connection");
const format = require("pg-format");
const { dropTables, createTables } = require("./manage-tables");

const seed = ({ productData }) => {
  dropTables()
    .then(() => {
      createTables();
    })
    .then(() => {
      const queryString = format(
        "INSERT INTO products (title, brand) VALUES %L RETURNING *;",
        productData.map(({ title, brand }) => [title, brand])
      );
      return db.query(queryString);
    })
    .catch((err) => console.log(err));
};

module.exports = seed;
