import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.get("/", (req, res) => res.sendFile(__dirname + "/frontend/index.html"));

app.listen(3000);