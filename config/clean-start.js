/** to prevent tsc compiler in command line break and prevent the compiler from going to watch mode
 * this script compile the project for the first time respecting tsconfig.json file
 * - delete the old compiled folder
 * - compile the ts files to the outDir folder (it just transpile the code)
 * - print compile error messages (not break like default behaviour of compiler)
 */

import ts from "typescript";
import { join } from "path";
import { readFileSync } from "fs";
import stripJsonComments from "strip-json-comments";
import rimraf from "rimraf";

const projectPath = join(process.cwd(), "src", "index.ts");
const compilerOptionsPath = join(process.cwd(), "tsconfig.json");
const compilerOptionsRaw = readFileSync(compilerOptionsPath, {
  encoding: "utf-8",
});

const configFileContent = JSON.parse(stripJsonComments(compilerOptionsRaw));

const outDir = join(process.cwd(), configFileContent.compilerOptions.outDir);

rimraf.sync(outDir);

const compilerOptions = ts.convertCompilerOptionsFromJson(
  configFileContent.compilerOptions,
);

if (compilerOptions.errors.length !== 0) {
  console.error(compilerOptions.errors);
  throw new Error("error reading typescript compiler options");
}

const program = ts.createProgram([projectPath], compilerOptions.options);

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
