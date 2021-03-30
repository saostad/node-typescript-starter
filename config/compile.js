const path = require("path");
const { exec } = require("pkg");
const colors = require("colors/safe");

const { version, name } = require(path.join(process.cwd(), "package.json"));
const sourceFile = path.join(__dirname, "..", "dist", "index.js");
const targetFile = path.join(__dirname, "..", "compile", `${name}-${version}`);

(async () => {
  await exec([
    sourceFile,
    "--target",
    "host",
    "--output",
    targetFile,
    "--options",
    "max_old_space_size=4096",
  ]);

  console.log(
    colors.green(
      `file ${targetFile} has been created. please keep all files exist in that folder together.`,
    ),
  );
})();
