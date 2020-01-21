# node typescript starter

### An opinionated combination of my favorite tools for starting a node project

# Quick Start

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
- to run in production: `npm run ts-node`
- to run in docker environment in `docker-compose up`

## Functionalities

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
- [x] ts-node
- [x] jest
- [x] eslint
- [x] nodemon
- [x] prettier
- [x] docker
- [x] fast-node-logger [powered by pino](https://github.com/pinojs/pino)

## TODO:

- performance improvement be adding ts-node-dev or compile with tsc and run with nodemon
