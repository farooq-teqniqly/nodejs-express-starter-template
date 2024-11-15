import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { greeterRoutes } from "./routes/greeterRoutes.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
greeterRoutes(app);

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

export { app };
