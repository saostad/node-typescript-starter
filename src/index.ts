import dotenv from "dotenv";
dotenv.config();

import { createLogger, writeLog } from "fast-node-logger";

export async function main() {
  /** ready to use instance of logger */
  const logger = await createLogger({
    level: "trace",
    prettyPrint: { colorize: true, translateTime: " yyyy-mm-dd HH:MM:ss" },
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
