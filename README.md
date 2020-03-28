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
- to run in production: `npm run prod`
- to run in docker environment in `docker-compose up`

## Functionalities

- dies at unhandled errors (this is very good strategy for production - docker will take care of restart the program after exit)
- pre-configured for work with VSCode debugger
- pre-configured to publish or create module
- pre-configured to run tests with jest
- pre-configured to load environment variables from .env file
- pre-configured to run in docker environment
- pre-configured to log in logs in root folder with default log rotation
- type-def for process.env variables
- restart the process after modifying ts files

## Powered By:

- [x] typescript
- [x] fast-node-logger [powered by pino](https://github.com/pinojs/pino)
- [x] jest
- [x] eslint
- [x] prettier
- [x] npm-run-all
- [x] nodemon
- [x] docker

## TODO:

- [ ] add error handling [best practices](https://www.youtube.com/watch?v=62ZRPJkHOX0&list=WL&index=10&t=0s)
- [ ] add pm2 for process monitoring in development
- [ ] add docker restart policy in make sure it restart in production
- [ ] remove all startup overhead to have fastest start up
- [ ] top-level await support
