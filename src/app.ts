import dotenv from "dotenv";
dotenv.config();

import { createLogger, writeLog } from "fast-node-logger";
import { terminate } from "./helpers/terminate";

const exitHandler = terminate({ coreDump: false, timeout: 0 });
process.on("uncaughtException", exitHandler(1, "Unexpected Error"));
process.on("unhandledRejection", exitHandler(1, "Unhandled Promise"));
process.on("SIGTERM", exitHandler(0, "SIGTERM"));
process.on("SIGINT", exitHandler(0, "SIGINT"));

export async function main() {
  await createLogger({ prettyPrint: { colorize: true } });

  /** put your code below here */

  writeLog("logger started!", { stdout: true, level: "trace" });
  writeLog(`here is my secret: ${process.env.MY_SECRET}`, { stdout: true });

  return process.env.MY_SECRET;
}

main();
