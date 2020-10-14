# this is auto generated file. please don't modify it manually.
# it automatically adds/override expose port and environment variables from .env file stored in root directory
FROM node:12.19.0-alpine
USER node
RUN mkdir -p /home/node/app/logs
COPY ["node_modules", "/home/node/app/node_modules/"]
COPY ["dist", "/home/node/app/dist/"]
CMD ["node", "--unhandled-rejections=strict", "/home/node/app/dist/index.js"]

ENV MY_SECRET=Hellooooo