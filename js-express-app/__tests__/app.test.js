const request = require("supertest");
const app = require("../app");
const seed = require("../db/seed.js");
const testData = require("../db/data/test-data/index");

beforeEach(() => {
  return seed(testData);
});

afterAll(() => {
  return db.end();
});

describe("GET /api/products", () => {
  test("200: lists all products", () => {
    const res = request(app).get("/api/products").expect(200);
    expect(res.body.products.length).toBe(3);
    body.products.forEach((product) => {
      expect(product).toEqual(
        expect.objectContaining({
          title: expect.any(String),
          brand: expect.any(String),
        })
      );
    });
  });
});
