# node typescript starter

### An opinionated combination of my favorite tools for starting a node project

# Quick Start

`npx create-ts-starter PROJECT_NAME Vscode`

![](quick-start.gif)

OR

`npm init ts-starter PROJECT_NAME VSCode`

### notice: you can ignore last param 'VSCode' is you don't want to open the project in VSCode!

## Commands

- `npm start` to start the development environment
- `npm run test` to run tests
- `npm run test:watch` to run tests in watch mode
- `npm run format` to format with prettier
- `npm run lint` to lint with eslint
- `npm run gen-docs` to generate documentations website
- `npm run prod` to run in production
- `npm run compile` to compile to obfuscated single executable file
- `npm run docker:build` to create docker image with data from `.env` file and version # from `package.json`
- `docker-compose up` to run in docker environment

## Functionalities

- pre-configured to publish or create npm module
- pre-configured to git tag the commit at publish time
- pre-configured to generate changelog.md file after each publish
- pre-configured to run tests with jest
- pre-configured to load environment variables from .env file
- pre-configured to run in docker environment
- pre-configured to log in logs in root folder with default log rotation
- pre-configured to generate api documentations in `docs` folder of root project directory
- pre-configured to compile the app to obfuscated executable single file
- pre-configured to connect Chrome DevTools in development environment
- restart the process after modifying ts files
- dies at unhandled errors (this is very good strategy for production - docker will take care of restart the program after exit)
- type-def for process.env variables

## Powered By:

- [x] [typescript](https://github.com/Microsoft/TypeScript)
- [x] [fast-node-logger](https://github.com/saostad/fast-node-logger)
- [x] [jest](https://github.com/facebook/jest)
- [x] [eslint](https://github.com/eslint/eslint)
- [x] [pkg](https://www.npmjs.com/package/pkg)
- [x] [javascript-obfuscator](https://github.com/javascript-obfuscator/javascript-obfuscator)
- [x] [prettier](https://github.com/prettier/prettier)
- [x] [TypeDoc](https://github.com/TypeStrong/TypeDoc)
- [x] [auto-changelog](https://www.npmjs.com/package/auto-changelog)
- [x] [npm-run-all](https://github.com/mysticatea/npm-run-all)
- [x] [nodemon](https://github.com/remy/nodemon)
- [x] [Docker](https://www.docker.com/)

## TODO:

- [ ] add error handling [best practices](https://www.youtube.com/watch?v=62ZRPJkHOX0&list=WL&index=10&t=0s)
- [ ] add pm2 for process monitoring in development
- [ ] remove all startup overhead to have fastest start up
- [ ] top-level await support (waiting for typescript to support it in CJS modules)
- [ ] [docker best practices](https://dev.to/nodepractices/docker-best-practices-with-node-js-4ln4)
