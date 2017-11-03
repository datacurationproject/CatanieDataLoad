FROM node:9
EXPOSE 8888

WORKDIR /home/node/app
COPY package.json /home/node/app


RUN npm install
