#!/usr/bin/env node
import { promisify } from "util";
import { join } from "path";
import { appendFileSync, unlinkSync, rmdirSync } from "fs";
import { exec } from "child_process";

/** Steps:
 * 1- create folder
 * 2- copy files to created folder
 * 3- run npm install
 * 4- run git init
 * 5- run vscode
 */

const defaultFolderName = "node-ts-starter";
const initWorkingDirectory = process.cwd();

let folderName = defaultFolderName;
if (process.argv.slice(2).length > 0) {
  folderName = process.argv.slice(2)[0];
}

const folderPath = join(initWorkingDirectory, folderName);

let runVsCode = false;
if (process.argv.slice(2).length > 1) {
  runVsCode = true;
}

const repo = "https://github.com/saostad/node-typescript-starter.git";
console.log(`downloading files from repo ${repo}`);

const execPromise = promisify(exec);
async function runShellCmd(command) {
  try {
    const { stdout, stderr } = await execPromise(command);
    console.log(stdout);
    console.log(stderr);
  } catch {
    (err) => {
      console.error(err);
    };
  }
}

async function setup() {
  try {
    await runShellCmd(`git clone --depth 1 ${repo} ${folderName}`);
    process.chdir(folderPath);

    console.log(`installing dependencies, please wait...`);
    await runShellCmd(`npm i`);
    console.log(`dependencies installed successfully!`);

    await runShellCmd(`npx rimraf ./.git`);
    console.log(`old .git folder deleted successfully!`);

    appendFileSync(".gitignore", "\r\ndist", "utf8");
    appendFileSync(".gitignore", "\r\n.env", "utf8");

    /** remove extra files and folders from disk. we don't need it anymore */
    unlinkSync(join(process.cwd(), "quick-start.gif"));
    unlinkSync(join(process.cwd(), "CHANGELOG.md"));
    unlinkSync(join(process.cwd(), "README.md"));
    unlinkSync(join(process.cwd(), "bin", "setup"));
    rmdirSync(join(process.cwd(), "bin"));

    await runShellCmd(`git init && git add . && git commit -am "init commit"`);
    console.log(`new git repo initialized successfully!`);

    console.log(`Commands to run the project:`);
    console.log();
    console.log(`cd ${folderName}`);
    console.log();
    console.log(`npm start`);
    console.log();
    console.log(`Happy Hacking!`);

    if (runVsCode) {
      console.log(`starting vscode...`);
      runShellCmd(`code ${folderPath}`);
    }
  } catch (error) {
    console.log(error);
  }
}

setup();
