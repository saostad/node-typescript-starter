/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
"use strict";
const path = require("path");
const fs = require("fs");
const dotenv = require("dotenv");
const { execSync } = require("child_process");

/**@step update Dockerfile */
const { parsed: dotEnvData } = dotenv.config({
  path: path.join(__dirname, "..", ".env"),
});

const dockerFilePath = path.join(__dirname, "Dockerfile");
const dockerFileData = fs.readFileSync(dockerFilePath, { encoding: "utf-8" });

/**@step remove comments, ENV & EXPOSE lines
 * we will write those line with new data from .env file!
 */
const dockerFileLines = dockerFileData.split("\n").filter((el) => {
  if (el.includes("EXPOSE")) {
    return false;
  }
  if (el.includes("ENV")) {
    return false;
  }
  if (el.includes("#")) {
    return false;
  }
  return true;
});

const envItems = Object.entries(dotEnvData);

/**@step add environment variables */
const envVariables = envItems.map(
  ([key, value]) => `ENV ${key}=${scapeString(value)}`,
);
dockerFileLines.push(...envVariables);

/**@step add expose port bis port number provided */
envItems.forEach(([key, value]) => {
  if (key.toLowerCase() === "port") {
    dockerFileLines.push(`EXPOSE ${value}/tcp`);
  }
});

dockerFileLines.unshift(
  `# this is auto generated file. please don't modify it manually.`,
  `# it automatically adds/override expose port and environment variables from .env file stored in root directory`,
);

const dockerFileModifiedData = dockerFileLines.join("\n");

fs.writeFileSync(dockerFilePath, dockerFileModifiedData, { encoding: "utf-8" });

console.log(`Writing Dockerfile ${dockerFilePath}`);

/**@step run build command */
const { version } = require(path.join(process.cwd(), "package.json"));
const { name } = require(path.join(process.cwd(), "package.json"));

const buildCmd = `docker build --pull --rm -f "${dockerFilePath}" -t ${name}:${version} "."`;

console.log(buildCmd);
console.log(`please wait...`);

const result = execSync(buildCmd);

console.log(result.toString());

/**@param {string} value */
function scapeString(value) {
  let result = value;
  if (value.includes("$")) {
    result = value.replace("$", "\\$");
  }
  return result;
}
