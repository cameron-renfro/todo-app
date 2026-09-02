// src/app.ts
import express, { type Express } from "express";
import { pool } from "./db/index.js";

export function createApp(): Express {
  const app = express();
  app.use(express.json());

  app.get("/api/health", async (_req, res) => {
    try {
      await pool.query("select 1");
      res.json({ status: "ok" });
    } catch {
      res.status(503).json({ status: "degraded" });
    }
  });

  return app;
}
