import request from "supertest";

import { app } from "../../app";

it("has a route handler listening to /api/tickets for post requests", async () => {
  const resp = await request(app).post("/api/tickets").send({});
  expect(resp.status).not.toEqual(404);
});

it("can be accessed of the user is signed in", async () => {
  await request(app).post("/api/tickets").send({}).expect(401);
});

it("returns a status rather than 401 if user is signed in", async () => {
  const resp = await request(app)
    .post("/api/tickets")
    .set("Cookie", signin())
    .send({});
  expect(resp.status).not.toEqual(401);
});

it("return an error if an invalid title is provided", async () => {});

it("return an error if an invalid price is provided", async () => {});

it("creates a ticket with valid inputs", async () => {});
