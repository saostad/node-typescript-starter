# node typescript starter

### An opinionated combination of my favorite tools for starting a node project

# Quick Start

`npx create-ts-starter PROJECT_NAME Vscode`

OR

`npm init ts-starter PROJECT_NAME VSCode`

### notice: you can ignore last param VSCode and open the project in your favorite editor manually!

OR

`git clone --depth 1 https://github.com/saostad/node-typescript-starter.git PROJECT_NAME`

`npm install`

`npm start`

## Other Commands

- to run tests: `npm t`
- to run tests in watch mode: `npm run test:watch`
- to format with prettier: `npm run format`
- to lint with eslint: `npm run lint`
- to generate documentations website: `npm run gen-docs`
- to run in production: `npm run prod`
- to run in docker environment in `docker-compose up`

## Functionalities

- pre-configured to publish or create module
- pre-configured to tag the commit at publish time
- pre-configured to generate changelog.md file after each publish
- pre-configured to run tests with jest
- pre-configured to load environment variables from .env file
- pre-configured to run in docker environment
- pre-configured to log in logs in root folder with default log rotation
- pre-configured to generate api documentations in `docs` folder of root project directory
- pre-configured to connect Chrome DevTools in development environment
- restart the process after modifying ts files
- dies at unhandled errors (this is very good strategy for production - docker will take care of restart the program after exit)
- type-def for process.env variables

## Powered By:

- [x] [typescript](https://github.com/Microsoft/TypeScript)
- [x] [fast-node-logger](https://github.com/saostad/fast-node-logger)
- [x] [jest](https://github.com/facebook/jest)
- [x] [eslint](https://github.com/eslint/eslint)
- [x] [prettier](https://github.com/prettier/prettier)
- [x] [TypeDoc](https://github.com/TypeStrong/TypeDoc)
- [x] [npm-run-all](https://github.com/mysticatea/npm-run-all)
- [x] [nodemon](https://github.com/remy/nodemon)
- [x] [Docker](https://www.docker.com/)

## TODO:

- [ ] add error handling [best practices](https://www.youtube.com/watch?v=62ZRPJkHOX0&list=WL&index=10&t=0s)
- [ ] add pm2 for process monitoring in development
- [ ] add docker restart policy in make sure it restart in production
- [ ] remove all startup overhead to have fastest start up
- [ ] top-level await support (waiting for typescript to support it in CJS modules)
- [ ] add changelog.md generator for pre-publish script
