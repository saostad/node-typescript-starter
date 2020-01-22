import dotenv from "dotenv";
import { createLogger, writeLog } from "fast-node-logger";

dotenv.config();

export async function main() {
  await createLogger();

  /** put your code below here */

  writeLog("logger started!", { stdout: true });
  writeLog(`here is my secret: ${process.env.MY_SECRET}`, { stdout: true });
  return process.env.MY_SECRET;
}

main();
