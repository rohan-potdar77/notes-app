import express from "express";

import note from "./note.js";
import { createError } from "./service.js";

const router = express.Router();

router.get("/", async (_req, res, next) => {
  try {
    const list = await note.find();
    res.status(200).json(list);
  } catch (error) {
    next(createError(error.message, 500));
  }
});

router.post("/", async (req, res, next) => {
  try {
    if (!req.body || !Array.isArray(req.body)) {
      return next(createError(403, "Invalid data!"));
    }

    const list = await note.insertMany(req.body);

    if (list.length > 0) {
      return res.status(201).json();
    } else {
      return next(createError(500, "Data not saved!"));
    }
  } catch (error) {
    next(createError(500, error.message));
  }
});

export default router;
