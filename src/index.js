import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import https from "https";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.get("/", (req, res) => res.sendFile(__dirname + "/frontend/index.html"));

if (process.env.environment === "prod") {
    const options = {
        key: fs.readFileSync(process.env.SRV_KEY_PATH),
        key: fs.readFileSync(process.env.SRV_CERT_PATH),
    }

    const server = https.createServer(options, app);
} else {
    app.listen(3000);
}