import { promisify } from "util";
import { exec } from "child_process";
import { loadJsonFile } from "load-json-file";
import { join } from "path";

const execPromise = promisify(exec);

async function runShellCmd(command) {
  try {
    const { stdout, stderr } = await execPromise(command);
    console.log(stdout);
    console.log(stderr);
  } catch (err) {
    console.error(err);
  }
}

const { version } = await loadJsonFile(join(process.cwd(), "package.json"));

async function tag() {
  await runShellCmd(`git add .`);
  console.log(`File: tag.js,`, `Line: 22 => `);

  await runShellCmd(`git commit`);
  console.log(`File: tag.js,`, `Line: 25 => `);

  await runShellCmd(`git tag v${version}`);
  console.log(`File: tag.js,`, `Line: 28 => `);
}
tag();
