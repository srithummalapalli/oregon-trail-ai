import express from "express";
import { generateEvent } from "../services/eventEngine.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(generateEvent());
});

export default router;
