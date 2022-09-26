import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import mongoose, { trusted } from "mongoose";
import cookieSession from "cookie-session";

import { signupRouter } from "./routes/signup";
import { signinRouter } from "./routes/signin";
import { currentUserRouter } from "./routes/current-user";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";
import { signOutRouter } from "./routes/signout";

const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: true,
  })
);

app.use(signupRouter);
app.use(signinRouter);
app.use(currentUserRouter);
app.use(signOutRouter);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

const start = async () => {
  if (!process.env.JWT_KEY) throw new Error("JWT_KEY must be defined");
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
    console.log("Connected to mongoDB");
  } catch (error) {
    console.error(error);
  }

  app.listen(3000, () => {
    console.log("Listening on port: 3000!");
  });
};

start();
