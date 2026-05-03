import express from "express";
import cors from "cors";
import eventRouter from "./routes/event.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/event", eventRouter);

app.listen(PORT, () => {
  console.log(`Oregon Trail AI server running on port ${PORT}`);
});
