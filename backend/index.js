import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import router from "./routes.js";
import { createError } from "./service.js";

const app = express();
const port = 4000;

mongoose
  .connect("mongodb://localhost:27017/notes_database")
  .then(() => console.info("Database connected!"))
  .catch((error) => console.error(error.message));

app.use(cors());
app.use(express.json());

app.use("/note", router);

app.use((_req, _res, next) => next(createError("Path not found!", 404)));

app.use((error, _req, res, _next) => {
  console.error(error);
  return res
    .status(error.status ?? 500)
    .json({ error: error.message ?? "Internal server error" });
});

app.listen(port, () => console.info("Server running on port:", port));
