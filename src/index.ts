import { config as loadEnvVars } from "dotenv";
import { writeLog } from "fast-node-logger";
import type { NodeMode } from "./typings/node/mode";
import { createLoggerInstance, getCredential } from "./helpers/util";

/* place holder for execution time measuring **/
const hrstart = process.hrtime();

process.on("beforeExit", (code) => {
  const hrend = process.hrtime(hrstart);
  console.log(`Execution time ${hrend[0]}s ${hrend[1] / 1000000}ms`);
  console.log(`exiting by code ${code}.`);
});

/** load process.env variables from .env file */
const loadEnvResult = loadEnvVars();
if (loadEnvResult.error) {
  throw new Error(
    `can't load the environment variables! ${loadEnvResult.error}`,
  );
}

/** server mode base on process.env.NODE_ENV */
let nodeMode: NodeMode = process.env.NODE_ENV || "production";

if (process.env.NODE_ENV) {
  nodeMode = process.env.NODE_ENV;
}

(async () => {
  const logger = await createLoggerInstance(nodeMode);
  /**@note put your code below here */
})().catch((err) => {
  writeLog([err], { stdout: true, level: "error" });
});
