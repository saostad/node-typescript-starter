# node typescript starter

### Production ready starter for typescript-node projects

# Quick Start

`npx create-ts-starter PROJECT_NAME Vscode`

![](quick-start.gif)

## Functionalities

- create ESM and CommonJS modules and publish to npm registry.
- configured to support top-level-await (look at Caveat section).
- scan for vulnerabilities via [HCL AppScan CodeSweep](https://marketplace.visualstudio.com/items?itemName=HCLTechnologies.hclappscancodesweep) in vscode IDE.
- auto tag the git commit at publish time.
- generate changelog.md file after each publishes.
- run tests with jest.
- load environment variables from .env file.
- load credentials from host operation system's credential manger.
- ready to run in a docker environment.
- write logs in .log file in the logs directory with customizable log rotation policy.
- generate API documentation in docs folder of the root project directory.
- compile the app to an executable single file.
- restart the process after modifying ts files.
- dies at unhandled errors (this is a very good strategy for production - docker will take care of restart the program after exit).
- type-def for process.env variables.
- recommends useful [vscode extensions](https://code.visualstudio.com/docs/editor/extension-gallery#_workspace-recommended-extensions).

### Notice:

- If you don't want to open the project folder in VSCode, You can ignore the 'VSCode' parameter.
- minimap is disabled by default.
- workbench sidebar is in right side of screen.

## Commands

- `npm start` to start the development environment
- `npm run compile` to compile to single executable file
- `npm run prod` to run in production
- `npm run test` to run tests
- `npm run test:watch` to run tests in watch mode
- `npm run format` to format with prettier
- `npm run lint` to lint with eslint
- `npm run gen-docs` to generate documentations website
- `npm run docker:build` to create docker image with data from `.env` file and version # from `package.json`
- `docker-compose up` to run in docker environment

## Powered By (Credit):

- [x] [typescript](https://github.com/Microsoft/TypeScript)
- [x] [fast-node-logger](https://github.com/saostad/fast-node-logger)
- [x] [jest](https://github.com/facebook/jest)
- [x] [eslint](https://github.com/eslint/eslint)
- [x] [pkg](https://www.npmjs.com/package/pkg)
- [x] [keytar](https://www.npmjs.com/package/keytar)
- [x] [prettier](https://github.com/prettier/prettier)
- [x] [TypeDoc](https://github.com/TypeStrong/TypeDoc)
- [x] [auto-changelog](https://www.npmjs.com/package/auto-changelog)
- [x] [npm-run-all](https://github.com/mysticatea/npm-run-all)
- [x] [nodemon](https://github.com/remy/nodemon)
- [x] [colors](https://www.npmjs.com/package/colors)
- [x] [Docker](https://www.docker.com/)
- [x] [wait-on](https://www.npmjs.com/package/wait-on)

## TODO:

- [ ] improve error handling [best practices](https://www.youtube.com/watch?v=62ZRPJkHOX0&list=WL&index=10&t=0s)
- [ ] [docker best practices](https://dev.to/nodepractices/docker-best-practices-with-node-js-4ln4)
- [ ] add entry for other builds (e.g. [esm](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c?s=03), browser, ...)
- [ ] fix failures when git is not installed on the host system.
- [ ] add templates to based on type of project that user wants to create, generate different projects ([esbuild](https://github.com/evanw/esbuild) for projects without decorators, tsc compiler, ...)
- [ ] add please wait... in initial of the process

## Caveat

- top level await [is not supported](https://github.com/vercel/pkg/issues/997) when compiling the single executable file.
