import { createApp } from "./app.js";
import { env } from "./config/env.js";
import { pool } from "./db/index.js";
import process from "node:process";

const server = createApp().listen(env.PORT, () => {
  console.log(`API listening on http://localhost:${env.PORT}`);
});

for (const signal of ["SIGTERM", "SIGINT"] as const) {
  process.on(signal, () => {
    server.close(() => void pool.end());
  });
}
