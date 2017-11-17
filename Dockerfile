FROM node:9
LABEL maintainer="garethcmurphy@gmail.com"
EXPOSE 8888

WORKDIR /home/node/app
COPY package.json /home/node/app


RUN npm install -g yarn
RUN yarn install
RUN yarn test
