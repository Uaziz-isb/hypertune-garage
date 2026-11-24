import { createRequire } from "node:module";
import type { Express } from "express";
import "express";
import "compression";
import "@google/genai";

const require = createRequire(import.meta.url);
const serverModule = require("../.server/server.cjs") as { default?: Express };
const app: Express = serverModule.default ?? (serverModule as unknown as Express);

export default app;
