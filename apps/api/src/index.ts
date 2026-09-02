import { createApp } from "./app.ts";
import { env } from "./config/env.ts";
import { pool } from "./db/index.ts";
import process from "node:process";

const server = createApp().listen(env.PORT, () => {
  console.log(`API listening on http://localhost:${env.PORT}`);
});

for (const signal of ["SIGTERM", "SIGINT"] as const) {
  process.on(signal, () => {
    server.close(() => void pool.end());
  });
}
