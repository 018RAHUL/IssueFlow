import express from "express";
import cors from "cors";
import helmet from "helmet";

import { env } from "./config/env.js";
import routes from "./routes/index.js";

const app = express();

app.use(helmet());

app.use(
    cors({
        origin: env.CLIENT_URL
    })
);

app.use(express.json());

app.use("/api/v1", routes);

app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "IssueFlow API is running"
    });
});

export default app;