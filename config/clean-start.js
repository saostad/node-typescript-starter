/** to prevent tsc compiler in command line break and prevent the compiler from going to watch mode
 * this script compile the project for the first time respecting tsconfig.json file
 * - delete the old compiled folder
 * - compile the ts files to the outDir folder (it just transpile the code)
 * - print compile error messages (not break like default behaviour of compiler)
 */

const ts = require("typescript");
const path = require("path");
const fs = require("fs");
const stripJsonComments = require("strip-json-comments");
const rimraf = require("rimraf");

const projectPath = path.join(process.cwd(), "src", "index.ts");
const compilerOptionsPath = path.join(process.cwd(), "tsconfig.json");
const compilerOptionsRaw = fs.readFileSync(compilerOptionsPath, {
  encoding: "utf-8",
});

const { compilerOptions } = JSON.parse(stripJsonComments(compilerOptionsRaw));

const outDir = path.join(process.cwd(), compilerOptions.outDir);

rimraf.sync(outDir);

const program = ts.createProgram([projectPath], {
  ...compilerOptions,
  tsBuildInfoFile: path.join(outDir, "tsconfig.tsbuildinfo"),
});
const emitResult = program.emit();

const allDiagnostics = ts
  .getPreEmitDiagnostics(program)
  .concat(emitResult.diagnostics);

allDiagnostics.forEach((diagnostic) => {
  if (diagnostic.file) {
    const { line, character } = diagnostic.file.getLineAndCharacterOfPosition(
      diagnostic.start,
    );
    const message = ts.flattenDiagnosticMessageText(
      diagnostic.messageText,
      "\n",
    );
    console.log(
      `${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`,
    );
  } else {
    console.log(ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"));
  }
});
