/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import express from "express";
import cors from "cors";
import compression from "compression";

import { router as userRouter } from "./routes/user.routes";

import errorHandler from "./middlewares/error.middleware.js";

// Create a new express application instance
export const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use(cors());
app.use(compression());

app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(errorHandler);
