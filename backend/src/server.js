import { env } from "./config/env.js";
import app from "./app.js";

const server = app.listen(env.PORT, () => {
    console.log(`IssueFlow server running on port ${env.PORT}`);
});