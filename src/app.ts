import dotenv from "dotenv";
dotenv.config();

import { createLogger, writeLog } from "fast-node-logger";

export async function main() {
  const logger = await createLogger({
    prettyPrint: { colorize: true, translateTime: " yyyy-mm-dd HH:MM:ss" },
  });
  /** put your code below here */

  logger.info("logger started!", { stdout: true, level: "trace" });
  logger.info(`here is my secret: ${process.env.MY_SECRET}`, { stdout: true });

  return process.env.MY_SECRET;
}

main().catch((err: Error) => {
  writeLog(err, { level: "error" });
  process.exit(100);
});
