import { Pool } from "pg";
const ENV = process.env.NODE_ENV || "development";
const db = new Pool();

const currentDir = new URL(".", import.meta.url).pathname;

require("dotenv").config({
  path: `${currentDir}/../.env.${ENV}`,
});

const config = {};

if (!process.env.PGDATABASE) {
  throw new Error("PGDATABASE not set");
}

module.exports = new Pool(config);
