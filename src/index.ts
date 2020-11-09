import dotenv from "dotenv";
import path from "path";
dotenv.config();
import { createLogger, writeLog } from "fast-node-logger";
import type { NodeMode } from "./typings/node/mode";

/** server mode base on process.env.NODE_ENV */
let nodeMode: NodeMode = process.env.NODE_ENV || "production";

if (process.env.NODE_ENV) {
  nodeMode = process.env.NODE_ENV;
}

export async function main() {
  /** ready to use instance of logger */
  const logger = await createLogger({
    level: nodeMode === "development" ? "trace" : "warn",
    prettyPrint: { colorize: true, translateTime: " yyyy-mm-dd HH:MM:ss" },
    logDir: path.join(process.cwd(), "logs"),
  });

  /** put your code below here */

  logger.trace("logger started!");

  // alternative to access logger
  writeLog(`here is my secret: ${process.env.MY_SECRET}`, {
    stdout: true,
    level: "warn",
  });

  return process.env.MY_SECRET;
}

main().catch((err: Error) => {
  writeLog(err, { level: "error", stdout: true });
});
