const fs = require("fs");
const path = require("path");

const configFilePathSrc = path.join(__dirname, "_config.yml");
const configFilePathDest = path.join(process.cwd(), "docs", "_config.yml");

fs.copyFileSync(configFilePathSrc, configFilePathDest);
