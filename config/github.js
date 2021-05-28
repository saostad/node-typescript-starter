import { copyFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const configFilePathSrc = join(__dirname, "_config.yml");
const configFilePathDest = join(process.cwd(), "docs", "_config.yml");

copyFileSync(configFilePathSrc, configFilePathDest);
