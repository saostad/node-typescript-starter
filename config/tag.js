import { promisify } from "util";
import { exec } from "child_process";
import loadJsonFile from "load-json-file";
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

const { version } = loadJsonFile.sync(join(process.cwd(), "package.json"));

async function tag() {
  await runShellCmd(`git add .`);
  await runShellCmd(`git commit`);
  await runShellCmd(`git tag v${version}`);
}
tag();
