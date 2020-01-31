import dotenv from "dotenv";
import { createLogger, writeLog } from "fast-node-logger";
import { terminate } from "./helpers/terminate";

dotenv.config();

// process.on("uncaughtException", err => {
//   writeLog([`Uncaught Exception: ${err.message}`, err], {
//     level: "fatal",
//     stdout: true,
//   });
//   process.exit(1);
// });
// process.on("unhandledRejection", (reason, promise) => {
//   writeLog([`Unhandled rejection at:`, promise, `reason: ${reason}`], {
//     level: "fatal",
//     stdout: true,
//   });
//   process.exit(1);
// });

const exitHandler = terminate({ coreDump: false, timeout: 0 });
process.on("uncaughtException", exitHandler(1, "Unexpected Error"));
process.on("unhandledRejection", exitHandler(1, "Unhandled Promise"));
process.on("SIGTERM", exitHandler(0, "SIGTERM"));
process.on("SIGINT", exitHandler(0, "SIGINT"));

export async function main() {
  await createLogger();

  /** put your code below here */

  writeLog("logger started!", { stdout: true, level: "trace" });
  writeLog(`here is my secret: ${process.env.MY_SECRET}`, { stdout: true });
  throw "dhdhdhgd@@@@@@@@@@@@@@@";

  return process.env.MY_SECRET;
}

main();
