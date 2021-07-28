import request from "supertest";
import app from "../../app";
import { connectDatabase, disconnectDatabase } from "../../database";

beforeAll(async () => {
  await connectDatabase();
});
afterAll(async () => {
  await disconnectDatabase();
  jest.setTimeout(10000);
});

describe("Get /user", () => {
  describe("valid request", () => {
    test("Should responded with a 200 status code", async () => {
      const response = await request(app)
        .get("/user")
        .send();
      expect(response.statusCode).toBe(200);
    });
    test("Should responded with an object", async () => {
      const response = await request(app)
        .get("/user")
        .send();
      expect(response.statusCode).toBeTruthy();
    });
  });
});
