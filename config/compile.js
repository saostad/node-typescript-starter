const path = require("path");
const { exec } = require("pkg");
const rimraf = require("rimraf");
const colors = require("colors/safe");

// rollup imports
const rollup = require("rollup");
const typescript = require("@rollup/plugin-typescript");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const json = require("@rollup/plugin-json");
const builtinModules = require("builtin-modules");
const nativePlugin = require("rollup-plugin-natives");

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

  await generateBundle();

  rimraf(path.join(process.cwd(), "compile", ".cache"), (err) => {
    if (err) {
      console.error(err);
    }
  });

  console.log(
    colors.green(
      `file ${targetFile} has been created. please keep all files exist in that folder together.`,
    ),
  );
})();

async function generateBundle() {
  const inputOptions = {
    input: "src/index.ts",
    external: builtinModules,
    plugins: [
      json(),
      nativePlugin({
        // Where we want to physically put the extracted .node files
        copyTo: "compile",
        // Path to the same folder, relative to the output bundle js
        destDir: "..",
      }),
      nodeResolve({ preferBuiltins: true }),
      commonjs(), // so Rollup can convert `ms` to an ES module
      typescript({ tsconfig: false, moduleResolution: "node" }),
    ],
  };
  const outputOptions = {
    output: {
      file: "compile/.cache/index.js",
      format: "cjs",
    },
  };
  // create a bundle
  const bundle = await rollup.rollup(inputOptions);

  // or write the bundle to disk
  await bundle.write(outputOptions);

  // closes the bundle
  await bundle.close();
}
