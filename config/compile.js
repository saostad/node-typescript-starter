import { join } from "path";
import pkg from "pkg";
import { green } from "colors/safe";

const { version, name } = require(join(process.cwd(), "package.json"));
const sourceFile = join(__dirname, "..", "dist", "index.js");
const targetFile = join(__dirname, "..", "compile", `${name}-${version}`);

(async () => {
  await pkg.exec([
    sourceFile,
    "--target",
    "host",
    "--output",
    targetFile,
    "--options",
    "max_old_space_size=4096",
  ]);

  console.log(
    green(
      `file ${targetFile} has been created. please keep all files exist in that folder together.`,
    ),
  );
})();
